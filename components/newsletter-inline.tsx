"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { subscribeToNewsletter } from "@/actions/email.actions";

interface Props {
  variant?: "footer" | "sidebar";
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  placeholder?: string;
  buttonLabel?: string;
  helperText?: string;
}

export function NewsletterInline({
  variant = "sidebar",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  placeholder = "you@example.com",
  buttonLabel = "Subscribe",
  helperText,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setStatus("error");
      setMessage("Please enter an email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const formData = new FormData();
    formData.append("email", email);

    const result = await subscribeToNewsletter(formData);

    if (result.success) {
      setStatus("success");
      setMessage(
        result.data?.id === "existing"
          ? "You're already subscribed!"
          : "Subscribed successfully.",
      );
      setEmail("");
    } else {
      setStatus("error");
      setMessage(result.error || "Failed to subscribe.");
    }
  };

  const baseInput =
    "w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all";
  const footerInput =
    "bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 placeholder:text-slate-400";
  const sidebarInput =
    "bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600";

  const baseButton =
    "w-full py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2";
  const footerButton = "bg-slate-900 text-white hover:bg-slate-800";
  const sidebarButton = "bg-slate-900 text-white hover:bg-slate-800";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 ${className}`}
    >
      {status !== "idle" && (
        <div
          className={`text-sm px-3 py-2 rounded-md border ${
            status === "success"
              ? "bg-green-50 text-green-800 border-green-200"
              : status === "error"
                ? "bg-red-50 text-red-800 border-red-200"
                : "bg-blue-50 text-blue-800 border-blue-200"
          }`}
        >
          {status === "loading" ? "Submitting..." : message}
        </div>
      )}

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        className={`${baseInput} ${
          variant === "footer" ? footerInput : sidebarInput
        } ${inputClassName}`}
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className={`${baseButton} ${
          variant === "footer" ? footerButton : sidebarButton
        } ${buttonClassName}`}
      >
        {status === "loading" ? "Submitting..." : buttonLabel}
        <Send className="w-3.5 h-3.5" />
      </button>

      {helperText && (
        <p className="text-xs text-slate-400 text-center">{helperText}</p>
      )}
    </form>
  );
}
