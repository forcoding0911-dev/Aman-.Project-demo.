import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FieldShellProps = {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
};

function FieldShell({ id, label, error, children }: FieldShellProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

const fieldClasses =
  "w-full rounded-sm border border-charcoal/20 px-4 py-3 text-sm transition-colors duration-200 focus:border-emerald-900";

// Applied only on first render after a validation error appears — not on
// every keystroke — so it reads as one clear piece of feedback, not noise.
const errorShake = "border-red-400 animate-shake";

export function TextField({
  id,
  label,
  error,
  ...props
}: FieldShellProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses, error && errorShake)}
        {...props}
      />
    </FieldShell>
  );
}

export function TextareaField({
  id,
  label,
  error,
  ...props
}: FieldShellProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <textarea
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses, error && errorShake)}
        {...props}
      />
    </FieldShell>
  );
}

export function SelectField({
  id,
  label,
  error,
  children,
  ...props
}: FieldShellProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <FieldShell id={id} label={label} error={error}>
      <select
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(fieldClasses, error && errorShake)}
        {...props}
      >
        {children}
      </select>
    </FieldShell>
  );
}
