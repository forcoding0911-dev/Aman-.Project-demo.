"use client";

import { useState, type FormEvent } from "react";
import { TextField, TextareaField } from "@/components/ui/FormField";
import FormSuccess from "@/components/ui/FormSuccess";

type Status = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    if (!String(form.get("name") || "").trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(form.get("email") || "")))
      nextErrors.email = "Please enter a valid email address.";
    if (!String(form.get("message") || "").trim()) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Demo-only: production would POST to a transactional email/CRM endpoint.
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <FormSuccess
        title="Message sent"
        message="Thank you for reaching out — our front desk team will reply within one business day."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <TextField id="c-name" name="name" label="Full name" type="text" error={errors.name} />
      <TextField id="c-email" name="email" label="Email address" type="email" error={errors.email} />
      <TextareaField id="c-message" name="message" label="Message" rows={5} error={errors.message} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-emerald-900 px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:bg-emerald-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
