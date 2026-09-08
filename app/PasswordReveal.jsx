"use client";

import { useState } from "react";

export default function PasswordReveal({ password }) {
  const [shown, setShown] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(password);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = password;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setShown(true);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="pw">
      <span className="pw-label">Password</span>
      <code className={`pw-value${shown ? "" : " masked"}`}>
        {shown ? password : "••••••••"}
      </code>
      <button
        type="button"
        className="pw-btn"
        onClick={() => setShown((s) => !s)}
        aria-pressed={shown}
      >
        {shown ? "Hide" : "Show"}
      </button>
      <button type="button" className="pw-btn" onClick={copy}>
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
