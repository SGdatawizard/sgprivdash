"use client";

import { useFormState, useFormStatus } from "react-dom";
import { login } from "./actions";

const initialState = { error: null };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="login-btn" disabled={pending}>
      {pending ? "Checking…" : "Enter"}
    </button>
  );
}

export default function LoginForm() {
  const [state, formAction] = useFormState(login, initialState);

  return (
    <main className="login-page">
      <form className="login-card" action={formAction}>
        <div className="brand login-brand">
          <span className="monogram">SG</span>
          <span className="wordmark">
            Stanley <em>Gibbons</em>
          </span>
        </div>
        <h1 className="login-title">Welcome!</h1>
        <p className="login-sub">Enter the password to continue.</p>
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="current-password"
          aria-label="Password"
          autoFocus
          required
        />
        {state?.error && <p className="login-error">{state.error}</p>}
        <SubmitButton />
      </form>
    </main>
  );
}
