"use client";

import { useState, type FormEvent } from "react";
import { TextField, TextareaField, SelectField } from "@/components/ui/FormField";
import FormSuccess from "@/components/ui/FormSuccess";

type Status = "idle" | "submitting" | "success";

export default function EventLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    if (!String(form.get("name") || "").trim()) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(String(form.get("email") || "")))
      nextErrors.email = "Please enter a valid email address.";
    if (!String(form.get("eventType") || "")) nextErrors.eventType = "Please select an event type.";
    if (!String(form.get("guests") || "").trim()) nextErrors.guests = "Please estimate your guest count.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // Demo-only: production would POST to an events-lead API endpoint.
    window.setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <FormSuccess
        title="Request received"
        message="Thank you — our events team will contact you within one business day with availability and a proposal."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <TextField id="name" name="name" label="Full name" type="text" error={errors.name} />
      <TextField id="email" name="email" label="Email address" type="email" error={errors.email} />

      <SelectField
        id="eventType"
        name="eventType"
        label="Event type"
        defaultValue=""
        error={errors.eventType}
      >
        <option value="" disabled>
          Select an event type
        </option>
        <option value="conference">Conference / Summit</option>
        <option value="wedding">Wedding</option>
        <option value="corporate">Corporate Meeting</option>
        <option value="other">Other</option>
      </SelectField>

      <TextField
        id="guests"
        name="guests"
        label="Estimated guest count"
        type="number"
        min={1}
        error={errors.guests}
      />

      <TextareaField id="details" name="details" label="Event details (optional)" rows={4} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-sm bg-gold-600 px-6 py-3 text-sm font-semibold text-cream shadow-gold transition-all duration-300 hover:bg-gold-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request Event Proposal"}
      </button>
    </form>
  );
}
