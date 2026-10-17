"use client";
import { useState } from "react";
import A from "./A";
import Icon, { WhatsAppIcon } from "./Icon";
import Photo from "./Photo";
import { BIZ, INQUIRY_TYPES, QUOTE_DEVICES, QUOTE_MODELS, QUOTE_ISSUES } from "@/lib/data";
import { openWhatsApp, waLink, telLink } from "@/lib/whatsapp";

const STEPS = ["Device", "Model", "Issue"];
const TITLES = ["What device do you have?", "Choose your device model.", "What is the issue?"];
const SUBS = ["Select your device type to get started.", (d) => `Choose the brand or model for your ${d}.`, "What issue are you experiencing?"];

function Tile({ selected, onClick, children, className = "" }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={selected}
      className={`flex items-center justify-center gap-3 rounded-2xl border px-4 text-center font-form font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#8cc43f]
      ${selected ? "border-[#e0912f] bg-[#fdf3e7] text-[#9a5a16] shadow-[0_0_0_5px_rgba(224,145,47,.14)]" : "border-[#e3e5e0] bg-[#f6f6f4] text-[#4a5258] hover:bg-[#efefeb]"} ${className}`}>
      {children}
    </button>
  );
}

function MapCard() {
  return (
    <A href={BIZ.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Open Plaza Imbi in Google Maps" className="relative block min-h-[150px] overflow-hidden rounded-xl bg-[#e8eee3]">
      <svg viewBox="0 0 240 160" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="240" height="160" fill="#e8eee3" /><rect x="150" y="90" width="90" height="70" fill="#cfe3bd" />
        {[[0, 40, 240, 52], [0, 118, 240, 112], [60, 0, 90, 160], [170, 0, 150, 160]].map(([a, b, c, d], i) => <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="#fff" strokeWidth={i < 2 ? 9 : 6} />)}
        <path d="M0 150 Q80 120 240 140" stroke="#f6d9a0" strokeWidth="5" fill="none" />
      </svg>
      <span className="absolute left-[44%] top-[28%] flex -translate-x-1/2 flex-col items-center">
        <span className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-bold shadow">Plaza Imbi<br /><span className="font-medium text-ink/60">Kuala Lumpur</span></span>
        <Icon name="pin" className="mt-1 h-7 w-7 fill-red-500 text-red-600" />
      </span>
    </A>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [step, setStep] = useState(0);
  const [device, setDevice] = useState("Laptop");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");

  const submit = () => {
    openWhatsApp(`Hello SK IT Services! I'd like a quote.\n\nDevice: ${device}\nBrand / Model: ${model}\nIssue: ${issue}\n\nPlease let me know the pricing. Thank you!`);
    setSent(true);
  };

  const canNext = step === 0 ? !!device : step === 1 ? !!model : !!issue;
  const next = () => canNext && setStep((s) => s + 1);
  const pickDevice = (d) => { setDevice(d); setModel(""); };
  const cards = [
    { icon: "whatsapp", title: "WhatsApp", main: BIZ.phoneDisplay, sub: "Fastest response", href: waLink() },
    { icon: "phone", title: "Phone Call", main: BIZ.phoneDisplay, sub: "Mon – Sat, 10AM – 7PM", href: telLink },
    { icon: "mail", title: "Email", main: BIZ.email, sub: "We'll get back to you soon", href: `mailto:${BIZ.email}` },
    { icon: "pin", title: "Visit Our Store", main: "Plaza Imbi, Kuala Lumpur", sub: "See location details below", href: BIZ.mapsUrl },
  ];

  return (
    <section id="contact" className="bg-white py-14 sm:py-20">
      <div className="wrap">
        <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h2 className="h-section mt-4">Let&apos;s Talk About<br /><span className="text-leaf">Your IT Needs.</span></h2>
            <p className="mt-4 max-w-[600px] text-[15px] leading-relaxed text-ink/75 sm:text-base">Whether you need a new computer, a repair, or a business IT solution, our team is here to help. Get in touch with us through your preferred channel or visit our store at Plaza Imbi, Kuala Lumpur.</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Photo src="/images/contact-hero.jpg" alt="SK IT Services front desk" sizes="(min-width:1024px) 45vw, 100vw" className="h-[240px] w-full sm:h-[320px] lg:h-[230px]" />
            <p className="absolute right-4 top-4 -rotate-6 text-right font-hand text-2xl leading-[1.05] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,.8)] sm:text-3xl">Same Team.<br />Real Support.</p>
          </div>
        </div>

        <ul className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <li key={c.title}>
              <A href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="card flex h-full items-center gap-3.5 p-4 transition hover:-translate-y-0.5 hover:shadow-lg">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-ink">{c.icon === "whatsapp" ? <WhatsAppIcon className="h-6 w-6" /> : <Icon name={c.icon} className="h-6 w-6" />}</span>
                <span className="min-w-0"><span className="block text-xs font-bold">{c.title}</span><span className="block break-words text-sm font-extrabold leading-tight">{c.main}</span><span className="block text-xs text-ink/55">{c.sub}</span></span>
              </A>
            </li>
          ))}
        </ul>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="card p-5 sm:p-7">
            <div className="flex items-center gap-3"><span className="bubble h-11 w-11"><Icon name="chat" /></span><div><h3 className="text-xl font-extrabold">Get a Free Quote</h3><p className="text-xs text-ink/60">Select your device and issue to get a quick quote.</p></div></div>

            {/* stepper */}
            <ol className="mt-5 flex items-center gap-2 sm:gap-3" aria-label="Progress">
              {STEPS.map((s, i) => (
                <li key={s} className={`flex items-center gap-2 ${i < 2 ? "flex-1" : ""}`} aria-current={i === step ? "step" : undefined}>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-sm font-bold sm:h-[34px] sm:w-[34px] ${i <= step ? "border-[#8cc43f] bg-[#8cc43f] text-[#1b2a12]" : "border-[#e1e3de] bg-white text-[#98a09a]"}`}>{i + 1}</span>
                  <span className={`text-sm font-semibold sm:text-base ${i <= step ? "text-[#4a7a1f]" : "text-[#98a09a]"}`}>{s}</span>
                  {i < 2 && <span className="h-px flex-1 bg-[#e1e3de]" />}
                </li>
              ))}
            </ol>

            <p className="mt-6 text-base text-[#6b736d] sm:text-lg">{typeof SUBS[step] === "function" ? SUBS[step](device) : SUBS[step]}</p>

            <div className="mt-4">
              {step === 0 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                  {QUOTE_DEVICES.map(([ic, name]) => (
                    <Tile key={name} selected={device === name} onClick={() => pickDevice(name)} className="min-h-[96px] flex-col gap-2 py-4 text-lg">
                      <Icon name={ic} className="h-7 w-7" />{name}
                    </Tile>
                  ))}
                </div>
              )}
              {step === 1 && (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {QUOTE_MODELS[device].map((m) => (
                    <Tile key={m} selected={model === m} onClick={() => setModel(m)} className="min-h-[84px] py-4 text-base sm:min-h-[96px]">{m}</Tile>
                  ))}
                </div>
              )}
              {step === 2 && (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {QUOTE_ISSUES.map(([ic, name]) => (
                    <Tile key={name} selected={issue === name} onClick={() => setIssue(name)} className="min-h-[60px] justify-start py-3 text-base">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#e8f1dc] text-[#4a7a1f]"><Icon name={ic} className="h-5 w-5" /></span>{name}
                    </Tile>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-7 flex items-center justify-between gap-3">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="inline-flex items-center gap-2 rounded-2xl bg-[#f1f3ee] px-5 py-3.5 font-bold text-[#3b443d] hover:bg-[#e8ebe4]"><Icon name="left" className="h-4 w-4" />Back</button>
              ) : <span />}
              {step < 2 ? (
                <button onClick={next} disabled={!canNext} className="inline-flex items-center gap-2 rounded-2xl bg-[#8cc43f] px-6 py-3.5 font-bold text-[#17210f] transition hover:bg-[#7db534] disabled:cursor-not-allowed disabled:opacity-50">Continue<Icon name="arrow" className="h-4 w-4" /></button>
              ) : (
                <button onClick={submit} disabled={!canNext} className="inline-flex items-center gap-2 rounded-2xl bg-[#8cc43f] px-5 py-3.5 font-bold text-[#17210f] transition hover:bg-[#7db534] disabled:cursor-not-allowed disabled:opacity-50 sm:px-7"><WhatsAppIcon />Send for pricing<Icon name="arrowUp" className="h-4 w-4" /></button>
              )}
            </div>
            {step === 2 && <p className="mt-4 text-center text-sm text-[#6b736d]">Your device details will be sent to SK IT Services on WhatsApp.</p>}
            {sent && <p role="status" className="mt-3 text-center text-sm text-leaf-dark">WhatsApp opened with your message. Just press send to reach us.</p>}
          </div>

          <div className="card p-5 sm:p-7">
            <div className="flex items-center gap-3"><span className="bubble h-11 w-11"><Icon name="store" /></span><div><h3 className="text-xl font-extrabold">Our Store</h3><p className="text-xs text-ink/60">Visit us for product enquiries, repairs or a consultation.</p></div></div>
            <Photo src="/images/store.jpg" alt="SK IT Services store at Plaza Imbi" sizes="(min-width:1024px) 45vw, 100vw" className="mt-5 h-48 w-full rounded-xl sm:h-56" />
            <div className="mt-5 grid gap-5 sm:grid-cols-[1.2fr_1fr]">
              <div className="space-y-4 text-sm">
                <div className="flex gap-3"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" /><address className="not-italic leading-snug"><b>{BIZ.addressLines[0]}</b><br />{BIZ.addressLines.slice(1).join(" ")}<br /><A href={BIZ.mapsUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-leaf-dark hover:underline">Get Directions →</A></address></div>
                <div className="flex gap-3"><Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-leaf" /><div className="leading-snug"><b>Operating Hours</b><br />{BIZ.hours.map((h) => <span key={h} className="block">{h}</span>)}</div></div>
              </div>
              <MapCard />
            </div>
          </div>
        </div>

        <div className="dark-sec mt-6 flex flex-col gap-6 rounded-2xl bg-ink p-6 text-white sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[440px]"><p className="text-[11px] font-bold uppercase tracking-[.14em] text-lime">Still have questions?</p><h3 className="mt-1 text-2xl font-extrabold text-lime sm:text-3xl">We&apos;re Here to Help.</h3><p className="mt-2 text-sm text-white/70">Not sure what you need? Our friendly team is ready to advise you on the right solution based on your usage, budget and requirements.</p></div>
          <ul className="grid grid-cols-2 gap-4 overflow-hidden sm:grid-cols-4">
            {[["chat", "Product Enquiry"], ["wrench", "Repair Support"], ["briefcase", "Business IT Consultation"], ["users", "General Questions"]].map(([ic, t]) => (
              <li key={t}><A href={waLink(`Hello SK IT Services! ${t}: `)} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-center text-xs font-semibold text-white/85 hover:text-lime"><span className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-lime"><Icon name={ic} className="h-5 w-5" /></span><span className="break-words">{t}</span></A></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
