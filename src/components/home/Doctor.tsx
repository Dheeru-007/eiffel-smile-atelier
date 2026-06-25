import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, ease } from "./Reveal";
import doctors from "@/content/doctors.json";

/* ── Static image imports (Vite requires literal imports) ── */
import cosminImg from "@/assets/cosmin-popescu.webp";
import larisaImg from "@/assets/larisa-pantea.webp";
import tatianaImg from "@/assets/tatiana-solomictaia.webp";
import marianaImg from "@/assets/mariana-catrinoiu.webp";

const imageMap: Record<string, string> = {
  "cosmin-popescu.jpg": cosminImg,
  "larisa-pantea.jpg": larisaImg,
  "tatiana-solomictaia.jpg": tatianaImg,
  "mariana-catrinoiu.jpg": marianaImg,
};

/* ── Staff card with hover-expand interaction ── */
interface StaffEntry {
  name: string;
  role: string;
  specialization: string;
  image: string;
  isLead: boolean;
}

function StaffCard({ staff }: { staff: StaffEntry }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Reveal className="h-80">
      <motion.div
        className="relative h-full w-full rounded-lg overflow-hidden cursor-pointer select-none"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Background photo */}
        <motion.img
          src={imageMap[staff.image]}
          alt={staff.name}
          width="800"
          height="1000"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: hovered
              ? "linear-gradient(to top, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.5) 50%, transparent 100%)"
              : "linear-gradient(to top, rgba(10, 15, 30, 0.82) 0%, rgba(10, 15, 30, 0.25) 50%, transparent 100%)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {/* Text content — pinned to the bottom */}
        <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end">
          {/* Name — always visible */}
          <motion.div
            className="font-serif text-xl text-cream font-light"
            animate={{ y: hovered ? -4 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {staff.name}
          </motion.div>

          {/* Role + specialization — hidden by default, slides up on hover */}
          <motion.div
            className="overflow-hidden"
            initial={false}
            animate={{
              opacity: hovered ? 1 : 0,
              height: hovered ? "auto" : 0,
              y: hovered ? 0 : 8,
            }}
            transition={{ duration: 0.35, ease: "easeOut", delay: hovered ? 0.1 : 0 }}
          >
            <div className="text-[11px] text-cream/60 uppercase tracking-[0.15em] mt-2">
              {staff.role}
            </div>
            {staff.specialization && (
              <div className="text-[11px] text-gold uppercase tracking-[0.15em] mt-1 font-light">
                {staff.specialization}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ── Main component ── */
export function Doctor() {
  const leadDoctor = doctors.find((d) => d.isLead) || doctors[0];

  return (
    <section id="doctor" className="bg-navy-deep text-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Intro block */}
        <Reveal>
          <div className="eyebrow text-gold">04 — Doctor</div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif text-3xl md:text-5xl mt-8 leading-[1.15] font-light max-w-3xl">
            <span className="text-gold italic">„</span>{leadDoctor.quote}<span className="text-gold italic">"</span>
          </p>
        </Reveal>

        {/* Team grid */}
        <div className="mt-20 border-t border-cream/15 pt-16">
          <Reveal delay={0.2}>
            <h3 className="eyebrow text-gold mb-8">Echipa Medicală</h3>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((staff) => (
              <StaffCard key={staff.name} staff={staff} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
