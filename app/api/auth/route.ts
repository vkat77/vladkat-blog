import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');

  if (provider !== 'github') {
    return new Response('Unsupported provider', { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!clientId || !siteUrl) {
    return new Response('OAuth not configured — missing GITHUB_CLIENT_ID or NEXT_PUBLIC_SITE_URL', { status: 500 });
  }

  const params = new URLSearchParams({
    client_id: clientId,
    scope: 'repo,user',
    redirect_uri: `${siteUrl}/api/auth/callback`,
  });

  return NextResponse.redirect(`https://github.com/login/oauth/authorize?${params}`);
}
