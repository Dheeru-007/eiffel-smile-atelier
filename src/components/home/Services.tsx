import { Reveal } from "./Reveal";
import services from "@/content/services.json";


export function Services() {
  return (
    <section id="servicii" className="bg-navy text-cream py-32 md:py-48 px-8 md:px-14">
      <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
        <div className="md:col-span-2"><div className="eyebrow text-gold">02 — Servicii</div></div>
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]">
              Trei discipline.<br />
              <span className="italic text-gold">Un singur standard.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="space-y-0">
        {services.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <a 
              href="#programare" 
              onClick={() => window.dispatchEvent(new CustomEvent("selectService", { detail: s.t }))}
              className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-t border-cream/15 hover:border-gold transition-colors"
            >
              <div className="md:col-span-2">
                <span className="eyebrow text-cream/40">{s.n}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-4xl md:text-5xl font-light group-hover:text-gold group-hover:translate-x-2 transition-all duration-500 ease-out">
                  {s.t}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-cream/70 font-light leading-relaxed">{s.d}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-[0.2em] border border-cream/20 px-3 py-1.5 text-cream/60">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 flex md:justify-end items-start">
                <span className="text-2xl group-hover:text-gold group-hover:rotate-45 transition-transform duration-500">→</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
