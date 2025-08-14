// // middleware.js
// import { NextResponse } from 'next/server'

// async function getRedirectDestination(pathname) {
//   // This could fetch from a CMS, database, or static config
//   // For now, just using a simple object
//   const redirects = {
//     '/test': '/image-cdn',
//   }
  
//   return redirects[pathname]
// }

// export async function middleware(request) {
//   const { pathname, search } = request.nextUrl
//   const host = request.headers.get('host')
  
//   const redirectTo = await getRedirectDestination(pathname)
  
//   if (redirectTo) {
//     // Use the same protocol and host as the incoming request
//     const redirectUrl = `${request.nextUrl.protocol}//${host}${redirectTo}${search}`
//     return NextResponse.redirect(redirectUrl, 301)
//   }
  
//   return NextResponse.next()
// }

// export const config = {
//   matcher: '/:path*',
// }