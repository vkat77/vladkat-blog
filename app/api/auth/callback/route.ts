import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return new NextResponse(`<html><body><h2>OAuth error: ${error}</h2><p>${searchParams.get('error_description') || ''}</p></body></html>`, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  if (!code) {
    return new NextResponse('<html><body><h2>Error: no code received from GitHub</h2></body></html>', {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return new NextResponse('<html><body><h2>Error: GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET not set in Vercel environment variables</h2></body></html>', {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code }),
  });

  const data = await response.json();

  if (data.error || !data.access_token) {
    return new NextResponse(`<html><body><h2>Token exchange failed</h2><pre>${JSON.stringify(data, null, 2)}</pre></body></html>`, {
      headers: { 'Content-Type': 'text/html' },
    });
  }

  const token = JSON.stringify({ token: data.access_token, provider: 'github' });
  const html = `<!doctype html><html><body><script>
    window.opener.postMessage('authorization:github:success:${token}', '*');
    window.close();
  </script></body></html>`;

  return new NextResponse(html, { headers: { 'Content-Type': 'text/html' } });
}
