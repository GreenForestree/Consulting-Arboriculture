"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";

// Shared form-field primitives. Each owns its label/error wiring via useId so
// individual forms don't have to think about a11y plumbing.

type BaseFieldProps = {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  required?: boolean;
};

const inputCls =
  "w-full rounded-md border border-forest-700/20 bg-white px-3.5 py-2.5 text-base text-forest-900 placeholder:text-forest-700/40 focus:border-forest-700 focus:outline-none focus:ring-2 focus:ring-forest-700/20 transition-shadow";

export function TextField({
  label,
  name,
  error,
  hint,
  required,
  type = "text",
  defaultValue,
  autoComplete,
  placeholder,
}: BaseFieldProps & {
  type?: "text" | "email" | "tel";
  defaultValue?: string;
  autoComplete?: string;
  placeholder?: string;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-forest-900">
        {label}
        {required && <span className="ml-1 text-bark-700" aria-hidden="true">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && hintId, error && errorId) || undefined}
        className={cn(inputCls, "mt-1.5", error && "border-bark-700 focus:border-bark-700 focus:ring-bark-700/20")}
      />
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-forest-900/60">{hint}</p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-bark-700">{error}</p>
      )}
    </div>
  );
}

export function SelectField({
  label,
  name,
  error,
  hint,
  required,
  options,
  defaultValue,
  placeholder,
}: BaseFieldProps & {
  options: Array<{ value: string; label: string }>;
  defaultValue?: string;
  placeholder?: string;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-forest-900">
        {label}
        {required && <span className="ml-1 text-bark-700" aria-hidden="true">*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        defaultValue={defaultValue ?? ""}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && hintId, error && errorId) || undefined}
        className={cn(inputCls, "mt-1.5 appearance-none bg-[length:1rem] bg-no-repeat bg-[right_0.75rem_center]", error && "border-bark-700 focus:border-bark-700 focus:ring-bark-700/20")}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23284733'><path d='M5.516 7.548l4.484 4.484 4.484-4.484-1.06-1.06L10 9.911 6.576 6.487z'/></svg>\")",
        }}
      >
        {placeholder && (
          <option value="" disabled>{placeholder}</option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-forest-900/60">{hint}</p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-bark-700">{error}</p>
      )}
    </div>
  );
}

export function TextareaField({
  label,
  name,
  error,
  hint,
  required,
  defaultValue,
  placeholder,
  rows = 5,
}: BaseFieldProps & {
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
}) {
  const id = useId();
  const hintId = `${id}-hint`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-forest-900">
        {label}
        {required && <span className="ml-1 text-bark-700" aria-hidden="true">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={cn(hint && hintId, error && errorId) || undefined}
        className={cn(inputCls, "mt-1.5 resize-y", error && "border-bark-700 focus:border-bark-700 focus:ring-bark-700/20")}
      />
      {hint && !error && (
        <p id={hintId} className="mt-1.5 text-xs text-forest-900/60">{hint}</p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-bark-700">{error}</p>
      )}
    </div>
  );
}
