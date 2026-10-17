import Icon, { WhatsAppIcon } from "./Icon";
import A from "./A";
import { Logo } from "./Header";
import { BIZ } from "@/lib/data";
import { waLink, telLink } from "@/lib/whatsapp";

const GROUPS = [
  { t: "Quick Links", links: [["Home", "#home"], ["Products", "#products"], ["Repair Services", "#services"], ["Business IT", "#business-it"]] },
  { t: "Company", links: [["About Us", "#why"], ["Contact Us", "#contact"], ["FAQ", "#faq"]] },
];
const Dot = ({ children }) => <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lime text-ink">{children}</span>;

function ContactDetails() {
  return (
    <ul className="space-y-3.5 text-sm">
      <li><A href={telLink} className="flex items-center gap-3 font-bold hover:text-lime"><Dot><Icon name="phone" className="h-4 w-4" /></Dot>{BIZ.phoneDisplay}</A></li>
      <li><A href={waLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold hover:text-lime"><Dot><WhatsAppIcon className="h-4 w-4" /></Dot>WhatsApp us</A></li>
      <li><A href={`mailto:${BIZ.email}`} className="flex items-center gap-3 font-bold hover:text-lime break-all"><Dot><Icon name="mail" className="h-4 w-4" /></Dot>{BIZ.email}</A></li>
      <li><A href={BIZ.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-white/90 hover:text-lime"><Dot><Icon name="pin" className="h-4 w-4" /></Dot><span className="leading-snug">{BIZ.addressOneLine}</span></A></li>
      <li className="flex items-start gap-3 text-white/90"><Dot><Icon name="clock" className="h-4 w-4" /></Dot><span className="leading-snug">Mon – Sat, 10:00 AM – 7:00 PM<br />Closed on Sunday</span></li>
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="dark-sec bg-ink text-white">
      <div className="wrap py-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.8fr_.8fr_1.5fr]">
          <div><Logo className="h-14" /><p className="mt-4 max-w-[240px] text-sm font-semibold text-white/85">{BIZ.tagline}</p></div>
          {GROUPS.map((g) => (
            <div key={g.t} className="hidden lg:block lg:border-l lg:border-white/10 lg:pl-8">
              <h4 className="font-extrabold text-lime">{g.t}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">{g.links.map(([l, h]) => <li key={l}><A href={h} className="flex items-center justify-between text-white/85 hover:text-lime">{l}<Icon name="right" className="h-3.5 w-3.5" /></A></li>)}</ul>
            </div>
          ))}
          {/* Contact details are always visible, on every screen size */}
          <div className="min-w-0 border-t border-lime/40 pt-5 lg:border-l lg:border-t-0 lg:border-white/10 lg:pl-8 lg:pt-0">
            <h4 className="mb-4 font-extrabold text-lime">Contact Details</h4>
            <ContactDetails />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 SK IT Services. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <A href="/privacy-policy" className="hover:text-lime">Privacy Policy</A>
            {/* <span className="h-3 w-px bg-lime" /> */}
            {/* <A href="#" className="hover:text-lime">Terms &amp; Conditions</A> */}
          </p>
        </div>
      </div>
    </footer>
  );
}
