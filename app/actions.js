"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

export async function login(prevState, formData) {
  const password = String(formData.get("password") || "");
  const secret = process.env.SITE_PASSWORD || "";

  if (secret && password === secret) {
    const token = crypto.createHash("sha256").update(secret).digest("hex");
    cookies().set("sg_auth", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
    redirect("/");
  }

  return { error: "Incorrect password. Please try again." };
}
