export { default } from "next-auth/middleware"
export const config = { matcher: ["/((?!_next/static|_next/|api/auth|auth/).*)"] }
