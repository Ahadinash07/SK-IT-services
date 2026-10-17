"use client";
import Icon from "./Icon";
import A from "./A";
import Photo from "./Photo";
import { HERO_FEATURES, BIZ } from "@/lib/data";
import { useQuote } from "./QuoteProvider";

export default function Hero() {
  const { open } = useQuote();
  return (
    <section id="home" className="dark-sec relative overflow-hidden bg-ink text-white">
      <div className="wrap relative pb-8 pt-10 lg:min-h-[600px] lg:pb-6 lg:pt-14">
        {/* mobile - image after heading */}
        <div className="sm:hidden">
          <div className="relative z-10 max-w-[560px]">
            <p className="text-[11px] font-bold uppercase tracking-[.14em] text-lime">SK IT Services · Kuala Lumpur</p>
            <h1 className="h-display mt-5">Your Trusted Partner in <span className="text-lime">IT Solutions.</span></h1>
          </div>
          <div className="relative overflow-hidden rounded-2xl mt-8">
            <Photo src="/images/hero.jpg" alt="Technician repairing a laptop at SK IT Services" priority sizes="(min-width:1024px) 60vw, 100vw" className="h-[220px] w-full" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[560px] mt-8">
            <p className="max-w-[480px] text-[15px] leading-relaxed text-white/80">Quality computers, professional repairs and practical IT solutions for individuals and businesses — all under one roof.</p>
            <div className="mt-7 flex flex-col gap-3">
              <A href="#services" className="btn btn-lime px-6 py-3.5">Explore Our Services <Icon name="arrow" className="h-4 w-4" /></A>
              <button onClick={open} className="btn btn-ghost px-6 py-3.5">Get a Free Quote</button>
            </div>
          </div>
        </div>
        {/* tablet and desktop - original layout */}
        <div className="hidden sm:block">
          <div className="relative grid items-center gap-8 lg:min-h-[600px] lg:grid-cols-[1.05fr_1fr]">
            <div className="relative z-10 max-w-[560px]">
              <p className="text-[11px] font-bold uppercase tracking-[.14em] text-lime sm:text-xs">SK IT Services · Kuala Lumpur</p>
              <h1 className="h-display mt-5">Your Trusted Partner in <span className="text-lime">IT Solutions.</span></h1>
              <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-white/80 sm:text-lg">Quality computers, professional repairs and practical IT solutions for individuals and businesses — all under one roof.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <A href="#services" className="btn btn-lime px-6 py-3.5 sm:min-w-[190px]">Explore Our Services <Icon name="arrow" className="h-4 w-4" /></A>
                <button onClick={open} className="btn btn-ghost px-6 py-3.5 sm:min-w-[170px]">Get a Free Quote</button>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl lg:absolute lg:inset-y-0 lg:right-0 lg:w-[58%] lg:rounded-none">
              <Photo src="/images/hero.jpg" alt="Technician repairing a laptop at SK IT Services" priority sizes="(min-width:1024px) 60vw, 100vw" className="h-[220px] w-full sm:h-[320px] lg:h-full" />
              <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-ink via-ink/40 to-transparent lg:block" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent lg:hidden" />
            </div>
          </div>
        </div>

        <div className="relative pt-2 z-10 pb-6">
          <ul className="grid gap-4 sm:grid-cols-3 sm:gap-0">
            {HERO_FEATURES.map((f, i) => (
              <li key={f.title} className={`flex items-center gap-3.5 sm:px-6 ${i > 0 ? "sm:border-l sm:border-white/10" : "sm:pl-0"}`}>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/[.07] text-lime"><Icon name={f.icon} className="h-5 w-5" /></span>
                <span><span className="block text-sm font-bold">{f.title}</span><span className="block text-xs text-white/60">{f.sub}</span></span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex items-center gap-4 text-center text-[11px] tracking-[.2em] text-white/70 sm:text-sm">
            <span className="h-px flex-1 bg-white/10" /><span>{BIZ.tagline}</span><span className="h-px flex-1 bg-white/10" />
          </div>
      </div>
      </div>
    </section>
  );
}
