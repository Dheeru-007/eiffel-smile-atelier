import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export function ImageReveal({ src, alt, className = "", parallax = false }: { src: string; alt: string; className?: string; parallax?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-8%", "8%"] : ["0%", "0%"]);
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileInView={{ clipPath: "inset(0% 0 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease }}
        className="absolute inset-0"
      >
        <motion.img
          src={src}
          alt={alt}
          width="1200"
          height="1200"
          style={{ y }}
          className="h-[115%] w-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}
