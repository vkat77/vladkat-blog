import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const info = {
    host: request.headers.get('host'),
    xForwardedHost: request.headers.get('x-forwarded-host'),
    xForwardedProto: request.headers.get('x-forwarded-proto'),
    url: request.url,
    generatedCallbackUrl: `https://${request.headers.get('x-forwarded-host') || request.headers.get('host')}/api/auth/callback`,
  };
  return NextResponse.json(info);
}
