import { cookies } from "next/headers";
import crypto from "crypto";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

// Always render per-request so the auth cookie is checked live, every visit.
export const dynamic = "force-dynamic";

function isAuthed() {
  const secret = process.env.SITE_PASSWORD || "";
  if (!secret) return false;
  const expected = crypto.createHash("sha256").update(secret).digest("hex");
  const token = cookies().get("sg_auth")?.value;
  return !!token && token === expected;
}

export default function Home() {
  return isAuthed() ? <Dashboard /> : <LoginForm />;
}
