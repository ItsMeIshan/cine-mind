import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./utils/firebase";
export { default } from "next-auth/middleware";
export function middleware(request: NextRequest) {}
export const config = {
  matcher: ["/"],
};
