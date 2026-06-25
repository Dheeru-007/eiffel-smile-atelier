import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { Services } from "@/components/home/Services";
import { Manifesto } from "@/components/home/Manifesto";
import { Gallery } from "@/components/home/Gallery";
import { Doctor } from "@/components/home/Doctor";
import { Testimonials } from "@/components/home/Testimonials";
import { Booking } from "@/components/home/Booking";
import { Footer } from "@/components/home/Footer";
import { StickyMobile } from "@/components/home/StickyMobile";
import { Reveal } from "@/components/home/Reveal";
import clinic from "@/content/clinic.json";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${clinic.name} — Stomatologie de autor în Timișoara` },
      { name: "description", content: `${clinic.name} - Cabinet stomatologic premium în Timișoara. Tratamente de calitate în regim personalizat.` },
      { property: "og:title", content: `${clinic.name} — Stomatologie de autor` },
      { property: "og:description", content: `Cabinet stomatologic premium în Timișoara. Splaiul Nicolae Titulescu 7.` },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-cream text-navy overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Gallery />
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
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Eiffel Praxis"
            width="100"
            height="100"
            className="h-8 md:h-9 w-auto brightness-0 invert"
          />
          <span className="flex items-baseline gap-1.5">
            <span className="font-serif text-2xl tracking-tight italic">Eiffel</span>
            <span className="eyebrow opacity-70">Praxis</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.28em]">
          <a href="#servicii" className="opacity-80 hover:opacity-100 transition">Servicii</a>
          <a href="#cabinet" className="opacity-80 hover:opacity-100 transition">Cabinet</a>
          <a href="#doctor" className="opacity-80 hover:opacity-100 transition">Doctor</a>
          <a href="#programare" className="opacity-80 hover:opacity-100 transition">Contact</a>
        </nav>
        <a href="#programare" aria-label="Programare din meniu" className="eyebrow border-b border-current pb-1">Programare →</a>
      </div>
    </header>
  );
}

function Marquee() {
  const stats = [
    { v: "15+ Ani", l: "De funcționare în Timișoara" },
    { v: "Propriu", l: "Laborator de tehnică dentară" },
    { v: "Norme U.E.", l: "Sterilizare & calitate superioară" },
    { v: "Parcare", l: "Locuri suficiente disponibile" },
  ];
  return (
    <section className="bg-cream border-y border-navy/10">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.l}
            delay={i * 0.08}
            className={`px-6 py-12 md:py-14 ${i !== 0 ? "md:border-l border-navy/10" : ""} ${i % 2 === 1 ? "border-l md:border-l border-navy/10" : ""} ${i > 1 ? "border-t md:border-t-0 border-navy/10" : ""}`}
          >
            <div className="font-serif text-4xl md:text-5xl font-light tracking-tight">{s.v}</div>
            <div className="eyebrow text-muted-foreground mt-3">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

