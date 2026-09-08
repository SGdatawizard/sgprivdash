"use client";

import { useState } from "react";

export default function PasswordReveal({ email, password }) {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState("");

  if (!email && !password) {
    return (
      <div className="pw pw-none">
        <span className="pw-note">No login required</span>
      </div>
    );
  }

  const copy = async (value, key) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setShown(true);
    setCopied(key);
    setTimeout(() => setCopied(""), 1500);
  };

  return (
    <div className="pw">
      <div className="pw-rows">
        {email && (
          <div className="pw-line">
            <span className="pw-label">Email</span>
            <code className={`pw-value${shown ? "" : " masked"}`}>
              {shown ? email : "••••••••"}
            </code>
            <button
              type="button"
              className="pw-btn"
              onClick={() => copy(email, "email")}
            >
              {copied === "email" ? "Copied" : "Copy"}
            </button>
          </div>
        )}
        {password && (
          <div className="pw-line">
            <span className="pw-label">Password</span>
            <code className={`pw-value${shown ? "" : " masked"}`}>
              {shown ? password : "••••••••"}
            </code>
            <button
              type="button"
              className="pw-btn"
              onClick={() => copy(password, "pw")}
            >
              {copied === "pw" ? "Copied" : "Copy"}
            </button>
          </div>
        )}
      </div>
      <button
        type="button"
        className="pw-btn pw-show"
        onClick={() => setShown((s) => !s)}
        aria-pressed={shown}
      >
        {shown ? "Hide" : "Show"}
      </button>
    </div>
  );
}
