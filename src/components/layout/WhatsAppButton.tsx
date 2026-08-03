import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ghion Hotel reception on WhatsApp"
      className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-transform duration-180 ease-in-out hover:scale-105 active:scale-95"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
