import Icon, { WhatsAppIcon } from "./Icon";
import A from "./A";
import { waLink, telLink } from "@/lib/whatsapp";
export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <A href={telLink} aria-label="Call SK IT Services" className="grid h-14 w-14 place-items-center rounded-full bg-lime text-ink shadow-lg transition hover:scale-105"><Icon name="phone" className="h-7 w-7" /></A>
      <A href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with SK IT Services on WhatsApp" className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"><WhatsAppIcon className="h-8 w-8" /></A>
    </div>
  );
}
