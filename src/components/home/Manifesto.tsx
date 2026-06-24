import { Reveal, ImageReveal } from "./Reveal";
import clinicImg from "@/assets/cabinet.jpg";
import detailImg from "@/assets/detail.jpg";
import clinic from "@/content/clinic.json";

export function Manifesto() {
  return (
    <section id="cabinet" className="relative bg-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <Reveal className="md:col-span-2 md:col-start-1">
          <div className="eyebrow text-teal">01 — Filosofie</div>
        </Reveal>
        <div className="md:col-span-9 md:col-start-3">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] font-light">
              Credem că un cabinet stomatologic ar trebui să se simtă ca <span className="italic text-teal">un hotel parizian</span> — discret, cald, atent la fiecare detaliu.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* overlapping image composition */}
      <div className="relative mt-24 md:mt-32 grid grid-cols-12 gap-4 md:gap-6">
        <ImageReveal
          src={clinicImg}
          alt={`Recepția cabinetului ${clinic.name}`}
          parallax
          className="col-span-12 md:col-span-8 aspect-[16/10]"
        />
        <ImageReveal
          src={detailImg}
          alt="Detaliu instrumente sterilizare"
          parallax
          className="col-span-7 md:col-span-3 md:col-start-10 aspect-[3/4] -mt-24 md:-mt-40 z-10 shadow-2xl"
        />
        <Reveal className="col-span-12 md:col-span-4 md:col-start-1 mt-8 md:mt-16 md:pl-2">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-sm">
            {clinic.description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

