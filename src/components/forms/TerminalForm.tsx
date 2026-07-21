"use client";

import { useState, type FormEvent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Terminal, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/cn";
import { DUR, EASE } from "@/lib/motion";

type TerminalField = {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
};

type Props = {
  endpoint: string;
  fields: TerminalField[];
  submitLabel?: string;
  successMessage?: string;
  className?: string;
};

type FormShape = Record<string, string>;

export function TerminalForm({
  endpoint,
  fields,
  submitLabel = "transmit",
  successMessage = "// signal delivered.",
  className,
}: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormShape>({
    mode: "onChange",
    defaultValues: fields.reduce<FormShape>((acc, f) => {
      acc[f.name] = "";
      return acc;
    }, {}),
  });

  const onSubmit = async (data: FormShape) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error ?? "transmission failed");
      }
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown error");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DUR.slow, ease: EASE }}
        className={cn(
          "rounded-lg border border-accent/40 bg-accent/5 p-4 font-mono text-sm text-accent",
          className
        )}
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          <span>{successMessage}</span>
        </div>
        <div className="mt-2 text-xs text-mute">
          // route: <span className="text-ink">POST {endpoint}</span>
        </div>
        <div className="mt-1 text-xs text-mute">
          // delivered_at:{" "}
          <span className="text-ink">
            {new Date().toISOString().replace("T", " ").slice(0, 19)}
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-3 font-mono text-sm", className)}
      noValidate
    >
      <div className="flex items-center gap-2 text-mute">
        <Terminal className="h-3.5 w-3.5" aria-hidden />
        <span className="text-xs uppercase tracking-widest">signal-ready</span>
        <span className="ml-auto text-xs text-mute/60">
          // POST {endpoint}
        </span>
      </div>

      {fields.map((field) => {
        const isFocused = focusedField === field.name;
        const value = watch(field.name);
        const isFilled = value && value.length > 0;
        return (
          <div key={field.name} className="space-y-1">
            <label
              htmlFor={field.name}
              className="block text-xs text-mute"
            >
              <span className="text-accent">▌ </span>
              {field.label}
              {field.required && (
                <span className="ml-1 text-danger">*</span>
              )}
            </label>
            <div
              className={cn(
                "flex items-start gap-2 rounded-md border bg-bg/50 px-3 py-2 transition-colors",
                isFocused
                  ? "border-accent"
                  : errors[field.name]
                    ? "border-danger"
                    : "border-line"
              )}
            >
              <span className="select-none pt-px text-accent">›</span>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  rows={4}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  className="flex-1 resize-none bg-transparent text-ink placeholder:text-mute/60 focus:outline-none"
                />
              ) : (
                <input
                  id={field.name}
                  type={field.type ?? "text"}
                  placeholder={field.placeholder}
                  {...register(field.name)}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  className="flex-1 bg-transparent text-ink placeholder:text-mute/60 focus:outline-none"
                  autoComplete="off"
                  spellCheck={false}
                />
              )}
              {isFilled && (
                <span className="select-none text-xs text-mute">[ok]</span>
              )}
            </div>
            {errors[field.name] && (
              <p className="text-xs text-danger" role="alert">
                // {String(errors[field.name]?.message ?? "invalid")}
              </p>
            )}
          </div>
        );
      })}

      {/* honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="sr-only"
        {...register("company")}
      />

      {error && (
        <p className="text-xs text-danger" role="alert">
          // err :: {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!isValid || submitting}
        className={cn(
          "inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs uppercase tracking-widest transition-colors",
          isValid && !submitting
            ? "border-accent bg-accent/10 text-accent hover:bg-accent/20"
            : "cursor-not-allowed border-line bg-bg/40 text-mute"
        )}
      >
        {submitting ? "transmitting…" : submitLabel}
        <span aria-hidden>↵</span>
      </button>
    </form>
  );
}