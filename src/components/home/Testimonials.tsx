import { Reveal } from "./Reveal";
import testimonials from "@/content/testimonials.json";

export function Testimonials() {
  return (
    <section className="bg-cream py-32 md:py-48 px-8 md:px-14">
      <div className="grid md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-2"><div className="eyebrow text-teal">05 — Recenzii</div></div>
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]">
              Gânduri bune de la pacienți,<br />
              <span className="italic text-teal">zâmbete redate cu drag.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy/10">
        {testimonials.map((r, i) => (
          <Reveal key={i} delay={i * 0.12} className="bg-cream p-10 md:p-14 flex flex-col justify-between min-h-[380px] border border-navy/5">
            <div>
              <p className="font-serif text-xl md:text-2xl mt-8 leading-snug font-light text-navy/90">„{r.quote}"</p>
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-navy/10 pt-6">
              <span className="font-serif text-lg font-medium text-navy">{r.author}</span>
              <span className="eyebrow text-[10px] text-teal tracking-wider uppercase font-medium">Recenzie</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

