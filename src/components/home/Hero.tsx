import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "./Reveal";
import heroImg from "@/assets/hero.jpg";
import clinic from "@/content/clinic.json";
import { siteConfig } from "@/config/site";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-screen bg-navy-deep text-cream overflow-hidden">
      {/* full bleed hero image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={heroImg} alt={`Cabinet stomatologic ${clinic.name} Timișoara`} className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 pt-32 md:pt-40 px-8 md:px-14 pb-24 min-h-screen flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="flex items-center gap-3 text-gold"
        >
          <span className="eyebrow text-cream/70">Stomatologie premium</span>
        </motion.div>

        <div className="max-w-5xl mt-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
            className="font-serif text-[clamp(2.5rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.02em] font-light"
          >
            Zâmbetul<br />
            <span className="italic text-gold">tău</span>, opera<br />
            noastră.
          </motion.h1>

          <div className="mt-10 md:mt-12 grid md:grid-cols-3 gap-8 md:gap-10 items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.6 }}
              className="md:col-span-2 text-lg md:text-xl text-cream/75 font-light max-w-xl leading-relaxed"
            >
              Stomatologie de autor în inima Timișoarei. Tratamente discrete, tehnologie de ultimă generație și o experiență de peste 15 ani gândită în jurul tău.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.75 }}
              className="flex flex-col items-start gap-4"
            >
              <a href="#programare" className="group inline-flex items-center gap-6 bg-cream text-navy rounded-full px-8 py-3.5 hover:bg-gold transition-colors duration-500">
                <span className="font-serif text-lg pt-0.5">Programează-te</span>
                <span className="text-xs tracking-[0.2em] group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-6 border border-cream/30 rounded-full text-cream px-8 py-3.5 hover:border-gold hover:text-gold transition">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-1.746-.871-2.892-1.554-4.043-3.524-.306-.526.306-.489.875-1.629.097-.196.05-.367-.05-.516-.099-.148-.669-1.612-.916-2.207-.247-.594-.495-.518-.67-.527-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.296-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.076c.149.198 2.064 3.151 5.005 4.292 2.94 1.141 2.94.76 4.005.654 1.064-.107 2.064-.654 2.41-1.214.347-.561.347-1.214.247-1.214-.097-.099-.297-.099-.594-.198z" />
                    <path d="M12.04 0C5.388 0 0 5.388 0 12.04c0 2.13.556 4.13 1.526 5.866L0 24l6.21-1.626a11.95 11.95 0 0 0 5.83 1.486h.005c6.652 0 12.04-5.388 12.04-12.04C24.085 5.388 18.697 0 12.04 0zm0 21.918a9.83 9.83 0 0 1-5.014-1.378l-.36-.21-3.708.973.99-3.617-.234-.372a9.83 9.83 0 0 1-1.513-5.275c0-5.443 4.435-9.878 9.882-9.878 2.642 0 5.122 1.03 6.985 2.897a9.83 9.83 0 0 1 2.893 6.986c0 5.443-4.435 9.878-9.92 9.878z" />
                  </svg>
                  <span className="eyebrow pt-0.5">WhatsApp</span>
                </span>
                <span className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </a>
            </motion.div>
          </div>
        </div>
        {/* spacer to push address to bottom, replacing justify-between */}
        <div className="mt-16 md:mt-24" />
      </motion.div>

      {/* corner serif label */}
      <div className="absolute bottom-8 right-8 md:right-14 z-10 text-right">
        <div className="h-px w-12 bg-cream/30 ml-auto mb-2" />
        <p className="eyebrow text-cream/50">{clinic.address}</p>
      </div>
    </section>
  );
}

