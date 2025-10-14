import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

            //provide by the clerk
const IsPublicRoute=createRouteMatcher([
    '/sign-in(.*)', // these are kind of the regex
    '/sign-up(.*)',
    '/([^/]+)'
])

export default clerkMiddleware(async (auth, req)=>{
    if(!IsPublicRoute(req)){
     await auth.protect()
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};