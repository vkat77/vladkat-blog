import { redirect } from 'next/navigation';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const provider = searchParams.get('provider');

  if (provider !== 'github') {
    return new Response('Unsupported provider', { status: 400 });
  }

  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    scope: 'repo,user',
    redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/callback`,
  });

  return redirect(`https://github.com/login/oauth/authorize?${params}`);
}
