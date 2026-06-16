import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero.jpg";
import doctorImg from "@/assets/doctor.jpg";
import smileImg from "@/assets/smile.jpg";
import detailImg from "@/assets/detail.jpg";
import clinicImg from "@/assets/clinic.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eiffel Praxis — Stomatologie de autor în Timișoara" },
      { name: "description", content: "Cabinet stomatologic premium în Timișoara. Implantologie, ortodonție și estetică dentară de către Dr. Cosmin Popescu." },
      { property: "og:title", content: "Eiffel Praxis — Stomatologie de autor" },
      { property: "og:description", content: "Cabinet stomatologic premium în Timișoara." },
    ],
  }),
  component: Home,
});

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.9, ease, delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

function ImageReveal({ src, alt, className = "", parallax = false }: { src: string; alt: string; className?: string; parallax?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-8%", "8%"] : ["0%", "0%"]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.3, ease }}
        className="absolute inset-0"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{ y }}
          className="h-[115%] w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-cream text-navy overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Transformations />
      <Doctor />
      <Testimonials />
      <Booking />
      <Footer />
      <StickyMobile />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-cream">
      <div className="flex items-center justify-between px-8 py-6 md:px-14">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight italic">Eiffel</span>
          <span className="eyebrow opacity-70">Praxis</span>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em]">
          <a href="#servicii" className="opacity-80 hover:opacity-100 transition">Servicii</a>
          <a href="#cabinet" className="opacity-80 hover:opacity-100 transition">Cabinet</a>
          <a href="#doctor" className="opacity-80 hover:opacity-100 transition">Doctor</a>
          <a href="#programare" className="opacity-80 hover:opacity-100 transition">Contact</a>
        </nav>
        <a href="#programare" className="eyebrow border-b border-current pb-1">Programare →</a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-screen bg-navy-deep text-cream overflow-hidden">
      {/* full bleed hero image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImg} alt="Cabinet stomatologic Eiffel Praxis Timișoara" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 pt-32 md:pt-40 px-8 md:px-14 pb-24 min-h-screen flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="flex items-center gap-3 text-gold"
        >
          <span className="tracking-[0.4em] text-xs">★ ★ ★ ★ ★</span>
          <span className="hairline w-12" />
          <span className="eyebrow text-cream/70">5.0 · 41 recenzii Google</span>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
            className="font-serif text-[14vw] md:text-[9vw] leading-[0.92] tracking-[-0.02em] font-light"
          >
            Zâmbetul<br />
            <span className="italic text-gold">tău</span>, opera<br />
            noastră.
          </motion.h1>

          <div className="mt-12 grid md:grid-cols-3 gap-10 items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.6 }}
              className="md:col-span-2 text-lg md:text-xl text-cream/75 font-light max-w-xl leading-relaxed"
            >
              Stomatologie de autor în inima Timișoarei. Tratamente discrete, tehnologie de ultimă generație și o experiență gândită în jurul tău.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.75 }}
              className="flex flex-col gap-3"
            >
              <a href="#programare" className="group inline-flex items-center justify-between bg-cream text-navy px-7 py-5 hover:bg-gold transition-colors duration-500">
                <span className="font-serif text-lg">Programează-te</span>
                <span className="text-xs tracking-[0.3em]">→</span>
              </a>
              <a href="#" className="group inline-flex items-center justify-between border border-cream/30 text-cream px-7 py-5 hover:border-gold hover:text-gold transition">
                <span className="eyebrow">WhatsApp</span>
                <span className="text-xs">↗</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* corner serif label */}
      <div className="absolute bottom-8 right-8 md:right-14 z-10 text-right">
        <p className="eyebrow text-cream/50">Timișoara · Est. 2017</p>
      </div>
    </section>
  );
}

function Marquee() {
  const stats = [
    { v: "5.0", l: "Google" },
    { v: "41+", l: "Recenzii" },
    { v: "8", l: "Ani de practică" },
    { v: "2 000+", l: "Pacienți" },
    { v: "CMDR", l: "Certificat" },
  ];
  return (
    <section className="bg-cream border-y border-navy/10">
      <div className="grid grid-cols-2 md:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal
            key={s.l}
            delay={i * 0.08}
            className={`px-6 py-12 md:py-14 ${i !== 0 ? "md:border-l border-navy/10" : ""} ${i % 2 === 1 ? "border-l md:border-l border-navy/10" : ""} ${i > 1 ? "border-t md:border-t-0 border-navy/10" : ""}`}
          >
            <div className="font-serif text-5xl md:text-6xl font-light tracking-tight">{s.v}</div>
            <div className="eyebrow text-muted-foreground mt-3">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Manifesto() {
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
          alt="Recepția cabinetului Eiffel Praxis"
          parallax
          className="col-span-12 md:col-span-8 aspect-[16/10]"
        />
        <ImageReveal
          src={detailImg}
          alt="Detaliu instrumente"
          parallax
          className="col-span-7 md:col-span-3 md:col-start-10 aspect-[3/4] -mt-24 md:-mt-40 z-10 shadow-2xl"
        />
        <Reveal className="col-span-5 md:col-span-3 md:col-start-1 -mt-12 md:mt-16 md:pl-2">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light max-w-xs">
            De la mahonul recepției la liniștea camerelor de tratament, fiecare element este ales pentru a-ți reaminti că ești în mâini bune.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  {
    n: "01",
    t: "Implantologie",
    d: "Soluții permanente realizate cu sisteme premium suedeze. Planificare digitală, ghidare 3D, rezultate care durează o viață.",
    tags: ["Straumann", "Ghidaj 3D", "Sedare conștientă"],
  },
  {
    n: "02",
    t: "Estetică & Fațete",
    d: "Fațete ceramice ultra-subțiri concepute individual. Un zâmbet care îți seamănă — doar mai bine.",
    tags: ["Emax", "Smile design", "Whitening"],
  },
  {
    n: "03",
    t: "Ortodonție invizibilă",
    d: "Aliniere discretă cu gutiere transparente Invisalign. Pentru adulții care nu vor să aștepte.",
    tags: ["Invisalign", "Scaner iTero"],
  },
];

function Services() {
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
            <a href="#" className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 border-t border-cream/15 hover:border-gold transition-colors">
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

function Transformations() {
  return (
    <section className="relative bg-cream py-32 md:py-48 overflow-hidden">
      <div className="px-8 md:px-14 grid md:grid-cols-12 gap-8 mb-20 md:mb-24">
        <div className="md:col-span-2"><div className="eyebrow text-teal">03 — Galerie</div></div>
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]">
              Înainte și după,<br /><span className="italic">povestiri reale.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-3 flex items-end">
          <Reveal delay={0.2}>
            <p className="text-sm text-muted-foreground font-light">
              Cazuri tratate la cabinetul nostru. Fiecare zâmbet, semnătura unui plan personalizat.
            </p>
          </Reveal>
        </div>
      </div>

      {/* asymmetric overlapping gallery */}
      <div className="relative grid grid-cols-12 gap-4 md:gap-6 px-8 md:px-14">
        <ImageReveal src={smileImg} alt="Caz 1" parallax className="col-span-12 md:col-span-7 aspect-[5/6]" />
        <div className="col-span-12 md:col-span-5 md:pt-32 space-y-6">
          <Reveal>
            <div className="border-l-2 border-teal pl-6">
              <div className="eyebrow text-teal">Caz nr. 24</div>
              <h3 className="font-serif text-3xl md:text-4xl mt-3 font-light">10 fațete ceramice Emax</h3>
              <p className="text-muted-foreground mt-4 font-light leading-relaxed">
                Andreea, 34 — reabilitare estetică completă a zonei frontale. Durată: 3 ședințe, peste 6 săptămâni.
              </p>
              <div className="eyebrow text-navy/50 mt-6">— Dr. Cosmin Popescu</div>
            </div>
          </Reveal>
          <ImageReveal src={detailImg} alt="Detaliu" parallax className="aspect-[4/3] mt-12" />
        </div>
      </div>

      <Reveal className="px-8 md:px-14 mt-16 md:mt-20 flex justify-between items-center border-t border-navy/15 pt-8">
        <span className="eyebrow text-muted-foreground">Vezi toate cazurile</span>
        <a href="#" className="font-serif text-2xl italic hover:text-teal transition">galeria completă →</a>
      </Reveal>
    </section>
  );
}

function Doctor() {
  return (
    <section id="doctor" className="bg-navy-deep text-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-5 md:col-start-1">
          <ImageReveal src={doctorImg} alt="Dr. Cosmin Popescu" className="aspect-[3/4]" />
          <Reveal delay={0.2} className="mt-6 flex justify-between items-baseline">
            <div>
              <div className="font-serif text-2xl">Dr. Cosmin Popescu</div>
              <div className="eyebrow text-gold mt-2">Medic primar · Fondator</div>
            </div>
            <div className="eyebrow text-cream/40">2017—</div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <Reveal>
            <div className="eyebrow text-gold">04 — Doctor</div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif text-3xl md:text-5xl mt-8 leading-[1.15] font-light">
              <span className="text-gold italic">„</span>Stomatologia nu vindecă doar dinți. Restaurează încredere, intimitate, prezență. Asta facem aici, în fiecare zi.<span className="text-gold italic">"</span>
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-16 grid grid-cols-2 gap-6 border-t border-cream/15 pt-10">
            {[
              ["Educație", 'UMF „Victor Babeș" · Timișoara'],
              ["Specializare", "Implantologie — Geneva"],
              ["Membru", "CMDR · ITI · EAO"],
              ["Limbi", "RO · EN · FR · DE"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="eyebrow text-cream/40">{k}</div>
                <div className="font-serif text-lg mt-2">{v}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    q: "Cel mai elegant cabinet în care am pus piciorul. Dr. Popescu mi-a redat încrederea în zâmbet.",
    n: "Andreea M.",
  },
  {
    q: "Profesionalism, răbdare, atenție la detalii. Singurul loc unde nu mi-e frică să merg.",
    n: "Vlad C.",
  },
  {
    q: "Implanturile arată și se simt natural. Întreaga experiență, ca la un spa.",
    n: "Roxana T.",
  },
];

function Testimonials() {
  return (
    <section className="bg-cream py-32 md:py-48 px-8 md:px-14">
      <div className="grid md:grid-cols-12 gap-8 mb-20">
        <div className="md:col-span-2"><div className="eyebrow text-teal">05 — Recenzii</div></div>
        <div className="md:col-span-8">
          <Reveal>
            <h2 className="font-serif text-5xl md:text-7xl font-light leading-[1.02] tracking-[-0.02em]">
              <span className="text-gold">★</span> 5.0 pe Google,<br />
              <span className="italic">de la oameni reali.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-px bg-navy/10">
        {reviews.map((r, i) => (
          <Reveal key={r.n} delay={i * 0.12} className="bg-cream p-10 md:p-14 flex flex-col justify-between min-h-[380px]">
            <div>
              <div className="text-gold tracking-[0.4em] text-xs">★ ★ ★ ★ ★</div>
              <p className="font-serif text-2xl md:text-3xl mt-8 leading-snug font-light">„{r.q}"</p>
            </div>
            <div className="mt-12 flex items-center justify-between border-t border-navy/10 pt-6">
              <span className="font-serif text-lg">{r.n}</span>
              <span className="eyebrow text-muted-foreground">Google</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="programare" className="relative bg-teal text-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img src={detailImg} alt="" className="w-full h-full object-cover mix-blend-overlay" />
      </div>
      <div className="relative grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <Reveal>
            <div className="eyebrow text-gold-soft">06 — Programare</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-6xl md:text-8xl mt-8 leading-[0.95] font-light tracking-[-0.02em]">
              Hai să facem<br /><span className="italic text-gold">cunoștință.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-12 space-y-6">
            {[
              ["WhatsApp", "+40 729 000 000", "Răspundem în <10 min"],
              ["Telefon", "+40 256 123 456", "Luni — Vineri, 9–19"],
              ["Adresă", "Str. Eiffel 14, Timișoara", "Parcare proprie"],
            ].map(([k, v, sub]) => (
              <div key={k} className="grid grid-cols-12 gap-4 border-t border-cream/25 pt-5">
                <div className="col-span-3 eyebrow text-cream/70">{k}</div>
                <div className="col-span-9">
                  <div className="font-serif text-2xl">{v}</div>
                  <div className="text-xs text-cream/70 mt-1">{sub}</div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-5 md:col-start-8 bg-cream text-navy p-10 md:p-12">
          <div className="eyebrow text-teal">Formular discret</div>
          <h3 className="font-serif text-3xl mt-4 font-light">Te sunăm noi.</h3>
          <form className="mt-10 space-y-7">
            {[
              ["Nume complet", "text", "Maria Popescu"],
              ["Telefon", "tel", "+40 7XX XXX XXX"],
            ].map(([l, type, ph]) => (
              <label key={l} className="block">
                <span className="eyebrow text-muted-foreground">{l}</span>
                <input type={type} placeholder={ph} className="mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition" />
              </label>
            ))}
            <label className="block">
              <span className="eyebrow text-muted-foreground">Serviciu de interes</span>
              <select className="mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition">
                <option>Consultație inițială</option>
                <option>Implantologie</option>
                <option>Fațete ceramice</option>
                <option>Ortodonție invizibilă</option>
              </select>
            </label>
            <button type="submit" className="group w-full mt-4 bg-navy text-cream py-5 flex items-center justify-between px-6 hover:bg-gold hover:text-navy transition-colors">
              <span className="font-serif text-lg">Trimite cererea</span>
              <span className="text-xs tracking-[0.3em]">→</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70 py-20 px-8 md:px-14">
      <div className="grid md:grid-cols-12 gap-8 border-b border-cream/15 pb-12">
        <div className="md:col-span-5">
          <div className="font-serif italic text-5xl text-cream">Eiffel Praxis</div>
          <p className="eyebrow mt-4">Timișoara · Est. 2017</p>
        </div>
        <div className="md:col-span-4 md:col-start-7 text-sm font-light leading-relaxed">
          Stomatologie de autor pentru cei care prețuiesc detaliul, intimitatea și rezultatele care durează.
        </div>
        <div className="md:col-span-3 text-sm">
          <div className="eyebrow text-cream/40 mb-3">Urmărește</div>
          <div className="space-y-2 font-serif text-lg">
            <div>Instagram ↗</div>
            <div>Google ↗</div>
            <div>WhatsApp ↗</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 text-xs text-cream/40">
        <span>© 2026 Eiffel Praxis SRL</span>
        <span>CMDR · ANPC</span>
      </div>
    </footer>
  );
}

function StickyMobile() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep text-cream grid grid-cols-3 border-t border-cream/15">
      <a href="#programare" className="py-4 text-center border-r border-cream/15 flex flex-col items-center gap-1">
        <span className="text-lg">📅</span>
        <span className="text-[10px] uppercase tracking-widest">Programare</span>
      </a>
      <a href="#" className="py-4 text-center border-r border-cream/15 flex flex-col items-center gap-1">
        <span className="text-lg">💬</span>
        <span className="text-[10px] uppercase tracking-widest">WhatsApp</span>
      </a>
      <a href="tel:+40256123456" className="py-4 text-center flex flex-col items-center gap-1 bg-gold text-navy">
        <span className="text-lg">📞</span>
        <span className="text-[10px] uppercase tracking-widest">Sună</span>
      </a>
    </div>
  );
}
