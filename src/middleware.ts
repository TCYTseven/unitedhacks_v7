import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Vercel / Next.js security patch: strip headers that can be abused
 * for CVE-2025-29927 (middleware bypass) and CVE-2025-32421 (cache poisoning).
 * Defense-in-depth even when using patched Next.js.
 */
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // CVE-2025-29927: prevent spoofed x-middleware-subrequest from bypassing auth
  requestHeaders.delete("x-middleware-subrequest");

  // CVE-2025-32421: prevent cache poisoning via x-now-route-matches
  requestHeaders.delete("x-now-route-matches");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
