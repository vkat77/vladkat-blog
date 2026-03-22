import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return new Response('Missing code', { status: 400 });
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const data = await response.json();

  if (data.error || !data.access_token) {
    const html = `<!doctype html><html><body><script>
      window.opener.postMessage('authorization:github:error:${JSON.stringify({ message: data.error_description || 'OAuth failed' })}', '*');
      window.close();
    </script></body></html>`;
    return new Response(html, { headers: { 'Content-Type': 'text/html' } });
  }

  const html = `<!doctype html><html><body><script>
    window.opener.postMessage('authorization:github:success:${JSON.stringify({ token: data.access_token, provider: 'github' })}', '*');
    window.close();
  </script></body></html>`;

  return new Response(html, { headers: { 'Content-Type': 'text/html' } });
}
