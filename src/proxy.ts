import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * The old site served blog posts at /?post=<slug>. This sends each of those
 * to the closest new post with a clean 301 (no leftover query string), and
 * anything without a close match to the blog index.
 */
const postMap: Record<string, string> = {
  "how-long-after-crash-sue-california": "how-long-do-i-have-to-file-a-personal-injury-claim-in-california",

  "top-mistakes-after-a-car-accident": "what-to-do-after-a-car-accident-in-california",
  "best-evidence-after-a-crash": "what-to-do-after-a-car-accident-in-california",
  "how-to-document-accident-injuries": "what-to-do-after-a-car-accident-in-california",
  "how-to-preserve-crash-evidence": "what-to-do-after-a-car-accident-in-california",

  "guide-to-truck-accident-liability": "who-is-liable-in-a-truck-accident",
  "top-causes-of-truck-crashes": "who-is-liable-in-a-truck-accident",
  "fatal-truck-accident-lawsuit-steps-families": "who-is-liable-in-a-truck-accident",

  "wrongful-death-survival-action": "california-wrongful-death-claims-explained",
  "wrongful-death-claim-what-families-should-know": "california-wrongful-death-claims-explained",
  "can-family-sue-for-wrongful-death": "california-wrongful-death-claims-explained",
  "guide-to-wrongful-death-damages": "california-wrongful-death-claims-explained",
  "top-causes-of-wrongful-death-california": "california-wrongful-death-claims-explained",
  "wrongful-death-lawsuit-examples": "california-wrongful-death-claims-explained",

  "personal-injury-claim-value-guide": "how-much-is-my-personal-injury-case-worth",
  "what-are-personal-injury-damages": "how-much-is-my-personal-injury-case-worth",
  "how-to-prove-pain-and-suffering": "how-much-is-my-personal-injury-case-worth",
  "how-to-value-future-medical-costs": "how-much-is-my-personal-injury-case-worth",
  "when-should-i-reject-settlement": "how-much-is-my-personal-injury-case-worth",
};

export function proxy(request: NextRequest) {
  const post = request.nextUrl.searchParams.get("post");
  if (!post) return NextResponse.next();

  const target = postMap[post];
  const url = request.nextUrl.clone();
  url.pathname = target ? `/blog/${target}` : "/blog";
  url.search = "";
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: "/",
};
