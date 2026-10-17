import QuoteProvider from "@/components/QuoteProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import A from "@/components/A";
import Icon, { WhatsAppIcon } from "@/components/Icon";
import { PRIVACY, PRIVACY_UPDATED } from "@/lib/privacy";
import { BIZ } from "@/lib/data";
import { waLink, telLink } from "@/lib/whatsapp";

export const metadata = {
  title: "Privacy Policy | SK IT Services",
  description: "How SK IT Services collects, uses and protects your personal data.",
};
const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

function Body({ text }) {
  if (text.startsWith("- ")) {
    return <ul className="list-disc space-y-1.5 pl-5 marker:text-leaf">{text.split("\n").map((l) => <li key={l}>{l.replace(/^- /, "")}</li>)}</ul>;
  }
  return <p>{text}</p>;
}

export default function PrivacyPage() {
  return (
    <QuoteProvider>
      <Header />
      <main>
        <section className="dark-sec bg-ink py-12 text-white sm:py-16">
          <div className="wrap">
            <p className="eyebrow">Legal</p>
            <h1 className="h-display mt-4">Privacy <span className="text-lime">Policy.</span></h1>
            <p className="mt-4 max-w-[620px] text-[15px] leading-relaxed text-white/75 sm:text-lg">How SK IT Services collects, uses and protects your personal data.</p>
            <p className="mt-3 text-sm text-white/55">Last updated: {PRIVACY_UPDATED}</p>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16">
          <div className="wrap grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
            <nav aria-label="On this page" className="hidden lg:block">
              <div className="sticky top-28 rounded-2xl bg-mist p-5">
                <p className="mb-3 text-sm font-extrabold">On this page</p>
                <ul className="space-y-2 text-sm">
                  {PRIVACY.map(([t]) => <li key={t}><A local href={`#${slug(t)}`} className="text-ink/75 hover:text-leaf-dark">{t}</A></li>)}
                </ul>
              </div>
            </nav>

            <div className="max-w-[760px] space-y-9 text-[15px] leading-relaxed text-ink/80">
              {PRIVACY.map(([t, paras]) => (
                <article key={t} id={slug(t)}>
                  <h2 className="mb-3 text-xl font-extrabold text-ink sm:text-2xl">{t}</h2>
                  <div className="space-y-3">{paras.map((p) => <Body key={p} text={p} />)}</div>
                  {t === "Contact us" && (
                    <ul className="mt-4 space-y-2.5 text-sm">
                      <li className="flex items-start gap-3"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" /><span>{BIZ.addressOneLine}</span></li>
                      <li><A href={telLink} className="flex items-center gap-3 font-semibold hover:text-leaf-dark"><Icon name="phone" className="h-5 w-5 text-leaf" />{BIZ.phoneDisplay}</A></li>
                      <li><A href={waLink("Hello SK IT Services! I have a question about your Privacy Policy.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-semibold hover:text-leaf-dark"><WhatsAppIcon className="h-5 w-5 text-leaf" />WhatsApp us</A></li>
                      <li><A href={`mailto:${BIZ.email}`} className="flex items-center gap-3 font-semibold hover:text-leaf-dark"><Icon name="mail" className="h-5 w-5 text-leaf" />{BIZ.email}</A></li>
                    </ul>
                  )}
                </article>
              ))}
              <A href="/" className="btn btn-dark"><Icon name="left" className="h-4 w-4" />Back to home</A>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </QuoteProvider>
  );
}
