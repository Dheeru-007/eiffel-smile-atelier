import { Reveal } from "./Reveal";
import cases from "@/content/cases.json";

export function Gallery() {
  return (
    <section className="relative bg-cream py-32 md:py-48 overflow-hidden">
      <div className="px-8 md:px-14 grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
        <div className="md:col-span-2"><div className="eyebrow text-teal">03 — Cazuri</div></div>
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]">
              Zâmbete reconstruite.<br /><span className="italic text-teal">Rezultate clinice.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-3 flex items-end">
          <Reveal delay={0.2}>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Cazuri clinice din cadrul cabinetului Eiffel Praxis. Fiecare rezultat este semnătura unui plan personalizat de tratament.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="px-8 md:px-14 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {cases.map((c, i) => (
          <Reveal key={c.id} delay={i * 0.1} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-2 bg-navy/5 p-2 border border-navy/10 rounded-sm">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground text-center">Înainte</span>
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  <img src={c.beforeImage} alt={`${c.title} înainte`} className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-teal text-center font-medium">După</span>
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  <img src={c.afterImage} alt={`${c.title} după`} className="w-full h-full object-cover transition-all duration-500" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-baseline border-b border-navy/10 pb-2">
              <span className="font-serif text-lg font-light">{c.title}</span>
              <span className="eyebrow text-xs text-muted-foreground">Eiffel Praxis Case</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

