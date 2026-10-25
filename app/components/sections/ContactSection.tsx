import React from "react";
import ContactForm from "../ContactForm";
import { Github, Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div>
      <div className="text-center p-3">
        <h2 className="text-2xl font-permanent">Get In Touch</h2>
        <p className="text-stone-600 text-sm mt-1">
          Whether you need autonomous AI workflows, full-stack web apps, mobile solutions, or protocol security, let&apos;s connect!
        </p>
      </div>

      <hr className="h-px m-6 bg-neutral-300" />

      {/* Direct Contact Channels */}
      <div className="w-full">
        <h3 className="text-lg font-bold text-center text-stone-800">Direct Contact Channels</h3>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-3">
          <div>
            <a
              href="mailto:itsdidar60@gmail.com"
              className="flex flex-col items-center w-32 bg-white/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-stone-200">
              <Mail size={26} strokeWidth={1.75} className="text-rose-500 mb-1" />
              <p className="text-xs font-bold text-stone-800">Email</p>
              <span className="text-[10px] text-stone-500 truncate max-w-full">itsdidar60@gmail</span>
            </a>
          </div>

          <div>
            <a
              href="https://wa.me/8801631188500"
              className="flex flex-col items-center w-32 bg-white/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-stone-200"
              target="_blank"
              rel="noopener noreferrer">
              <MessageCircle size={26} strokeWidth={1.75} className="text-emerald-500 mb-1" />
              <p className="text-xs font-bold text-stone-800">WhatsApp</p>
              <span className="text-[10px] text-stone-500">+880 1631-188500</span>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/didar-lahiry"
              className="flex flex-col items-center w-32 bg-white/80 rounded-xl p-4 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-stone-200"
              target="_blank"
              rel="noopener noreferrer">
              <Github size={26} strokeWidth={1.75} className="text-stone-900 mb-1" />
              <p className="text-xs font-bold text-stone-800">GitHub</p>
              <span className="text-[10px] text-stone-500">didar-lahiry</span>
            </a>
          </div>

          <div>
            <div className="flex flex-col items-center w-32 bg-white/80 rounded-xl p-4 shadow-xs border border-stone-200">
              <MapPin size={26} strokeWidth={1.75} className="text-amber-500 mb-1" />
              <p className="text-xs font-bold text-stone-800">Location</p>
              <span className="text-[10px] text-stone-500 flex items-center gap-0.5">
                <Clock size={10} /> Dhaka (GMT+6)
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="h-px m-6 bg-neutral-300" />

      {/* Contact Form */}
      <div className="w-full md:w-5/6 lg:w-3/4 md:mx-auto">
        <h3 className="text-lg font-bold text-center text-stone-800">Send Project Inquiry</h3>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
