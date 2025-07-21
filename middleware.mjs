import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Example: redirect to a custom 404 page, preserving the host
  if (url.pathname === '/test') {
    url.pathname = '/image-cdn';
    // Use absolute URL to preserve host
    return NextResponse.redirect(url, 302);
  }

  return NextResponse.next();
}
