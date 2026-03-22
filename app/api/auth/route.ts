import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');

  if (provider !== 'github') {
    return new Response('Unsupported provider', { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return new Response('OAuth not configured — missing GITHUB_CLIENT_ID', { status: 500 });
  }

  const host = request.headers.get('x-forwarded-host') || request.headers.get('host');
  const protocol = host?.startsWith('localhost') ? 'http' : 'https';
  const callbackUrl = `${protocol}://${host}/api/auth/callback`;

  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user',
    redirect_uri: callbackUrl,
  });

  return NextResponse.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
