"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const serviceCategories = [
  "AI Automation & Autonomous Agents",
  "Full-Stack Web Development (3D / React)",
  "Mobile App Development (Android / iOS)",
  "Reverse Engineering & Protocol Security",
  "Technical Consultation / Architecture",
];

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const formData = new FormData(form.current);
    const clientName = (formData.get("user_name") as string) || "Client";
    const clientEmail = formData.get("user_email") as string;
    const clientPhone = (formData.get("user_phone") as string) || "Not provided";
    const selectedService = formData.get("service") as string;
    const clientMessage = formData.get("message") as string;

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceID && templateID && publicKey) {
      setStatus("sending");
      emailjs
        .sendForm(serviceID, templateID, form.current, {
          publicKey: publicKey,
        })
        .then(
          () => {
            setStatus("success");
            setStatusMessage("Inquiry sent successfully! Didar will reply to your email shortly.");
            form.current?.reset();
            setTimeout(() => setStatus("idle"), 5000);
          },
          (error) => {
            setStatus("error");
            setStatusMessage(error.text || "Failed to dispatch email. Please use direct email or WhatsApp.");
            setTimeout(() => setStatus("idle"), 6000);
          }
        );
    } else {
      // Direct mailto link fallback
      setStatus("success");
      setStatusMessage("Opening email client to send message to itsdidar60@gmail.com...");
      const subject = encodeURIComponent(`New Inquiry: ${selectedService} (${clientName})`);
      const body = encodeURIComponent(
        `Hi Didar,\n\nName: ${clientName}\nEmail: ${clientEmail}\nPhone: ${clientPhone}\nArea of Interest: ${selectedService}\n\nMessage:\n${clientMessage}\n`
      );
      window.location.href = `mailto:itsdidar60@gmail.com?subject=${subject}&body=${body}`;
      form.current?.reset();
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="p-4 m-2 sm:m-4 border-2 rounded-2xl border-stone-300 bg-white/70 backdrop-blur-xs flex flex-col gap-3.5 shadow-sm text-stone-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="user_name" className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
              Your Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="Elon Musk"
              required
              className="w-full p-2.5 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
            />
          </div>
          <div>
            <label htmlFor="user_email" className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="name@company.com"
              required
              className="w-full p-2.5 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="user_phone" className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
              Phone / WhatsApp <span className="text-stone-400 font-normal">(Optional)</span>
            </label>
            <input
              id="user_phone"
              type="tel"
              name="user_phone"
              placeholder="+880 1700-000000"
              className="w-full p-2.5 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
              Area of Interest <span className="text-rose-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue={serviceCategories[0]}
              className="w-full p-2.5 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white">
              {serviceCategories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-stone-700 mb-1 uppercase tracking-wider">
            Project Details &amp; Objectives <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project, timeline, and workflow requirements..."
            required
            className="w-full p-2.5 text-sm border border-stone-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-amber-500 bg-white"
            rows={3}
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full p-3 bg-stone-900 text-white font-semibold rounded-lg hover:bg-stone-800 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 transition shadow">
          <Send size={16} />
          {status === "sending" ? "Dispatching Message..." : "Send Project Inquiry"}
        </button>

        {status === "success" && (
          <div className="flex items-center justify-center gap-2 text-emerald-600 text-xs font-semibold">
            <CheckCircle size={16} /> {statusMessage}
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center justify-center gap-2 text-rose-600 text-xs font-semibold">
            <AlertCircle size={16} /> {statusMessage}
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
