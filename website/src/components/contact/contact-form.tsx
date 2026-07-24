"use client";

import { useState } from "react";
import { Send } from "lucide-react";

/**
 * Contact form UI. Submission composes a prefilled email to sales@ as a
 * backend-free default; swap `handleSubmit` for the production form endpoint
 * when integrating. The SMS-consent copy is TCPA/A2P-10DLC carrier-compliance
 * language and must be preserved verbatim.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(form.get("subject") || "Website inquiry"));
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nPhone: ${form.get("phone") || "—"}\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:sales@itechsmart.dev?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const inputCls =
    "w-full rounded-xl border hairline bg-panel px-4 py-3 text-sm text-bright placeholder:text-dim focus:border-proof/50 focus:outline-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-mist">Name</label>
          <input id="name" name="name" required className={inputCls} placeholder="Ada Lovelace" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-mist">Email</label>
          <input id="email" name="email" type="email" required className={inputCls} placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-mist">
            Phone number <span className="text-dim">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={inputCls} placeholder="(555) 000-0000" />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-mist">Subject</label>
          <input id="subject" name="subject" required className={inputCls} placeholder="Demo request, POC, pricing…" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-mist">Message</label>
        <textarea id="message" name="message" required rows={5} className={inputCls} placeholder="Tell us about your environment…" />
      </div>

      <fieldset className="space-y-3 rounded-xl border hairline bg-panel/60 p-5">
        <legend className="px-1 font-mono text-xs uppercase tracking-[0.14em] text-dim">SMS consent (optional)</legend>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-fog">
          <input type="checkbox" name="sms_marketing" className="mt-0.5 accent-[#3ce8a4]" />
          <span>
            I consent to receive marketing text messages, about special offers, discounts, and service updates, from
            iTechSmart at the phone number provided. Message frequency may vary. Message &amp; data rates may apply.
            Text HELP for assistance, reply STOP to opt out. Privacy Policy &amp; Terms of Service.
          </span>
        </label>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-fog">
          <input type="checkbox" name="sms_transactional" className="mt-0.5 accent-[#3ce8a4]" />
          <span>
            I consent to receive non-marketing text messages from iTechSmart about scheduling confirmations, appointment
            reminders, rescheduling updates, and customer support communications. Message frequency may vary, message
            &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out. Privacy Policy &amp; Terms of
            Service.
          </span>
        </label>
      </fieldset>

      <button
        type="submit"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-proof px-7 font-semibold text-ink shadow-glow-proof transition-all duration-300 hover:bg-[#5ff0b8] active:scale-[0.98]"
      >
        {status === "sent" ? "Opening your email client…" : "Send message"}
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
      </button>
    </form>
  );
}
