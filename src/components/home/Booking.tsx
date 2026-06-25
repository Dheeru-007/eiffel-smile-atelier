import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import detailImg from "@/assets/detail.jpg";
import { Reveal } from "./Reveal";
import clinic from "@/content/clinic.json";
import services from "@/content/services.json";

const bookingSchema = z.object({
  name: z.string().min(1, { message: "Numele complet este obligatoriu" }),
  phone: z.string().min(5, { message: "Numărul de telefon este obligatoriu și trebuie să aibă cel puțin 5 cifre" }),
  service: z.string().min(1, { message: "Serviciul de interes este obligatoriu" }),
  website: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function Booking() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const mountTimeRef = useRef<number>(Date.now());
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: services[0]?.t || "Consultație inițială",
      website: "",
    },
  });

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setValue("service", customEvent.detail);
      }
    };
    window.addEventListener("selectService", handleSelectService);
    return () => window.removeEventListener("selectService", handleSelectService);
  }, [setValue]);

  const onSubmit = (data: BookingFormValues) => {
    if (data.website) {
      console.warn("Spam detected via honeypot.");
      return;
    }

    const timeSinceMount = (Date.now() - mountTimeRef.current) / 1000;
    if (timeSinceMount < 3) {
      console.warn("Submission too fast (spam protection).");
      return;
    }

    console.log("Validated payload:", data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="programare" className="relative bg-teal text-cream py-32 md:py-48 px-8 md:px-14 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img src={detailImg} alt="" width="1600" height="1200" className="w-full h-full object-cover mix-blend-overlay" />
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
              ["WhatsApp", siteConfig.whatsapp, clinic.email],
              ["Telefon", `tel:${clinic.phone.replace(/\s+/g, "")}`, clinic.workingHours],
              ["Adresă", `https://maps.google.com/?q=${encodeURIComponent(clinic.address)}`, "Parcare cu locuri suficiente"],
            ].map(([k, v, sub]) => (
              <div key={k} className="grid grid-cols-12 gap-4 border-t border-cream/25 pt-5">
                <div className="col-span-3 eyebrow text-cream/70">{k}</div>
                <div className="col-span-9">
                  {v.startsWith("http") || v.startsWith("tel:") ? (
                    <a href={v} target={v.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-serif text-2xl hover:text-gold transition block">
                      {k === "WhatsApp" ? clinic.phone : k === "Telefon" ? clinic.phone : clinic.address} ↗
                    </a>
                  ) : (
                    <div className="font-serif text-2xl">{v}</div>
                  )}
                  <div className="text-xs text-cream/70 mt-1">
                    {k === "WhatsApp" ? (
                      <a href={`mailto:${sub}`} className="hover:text-gold transition">
                        {sub}
                      </a>
                    ) : (
                      sub
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:col-span-5 md:col-start-8 bg-cream text-navy p-10 md:p-12 min-h-[450px] flex flex-col justify-center">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-6 py-8"
            >
              <div className="text-teal text-6xl">✓</div>
              <h3 className="font-serif text-3xl font-light">Solicitare trimisă</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Mulțumim pentru interes. Te vom contacta în cel mai scurt timp posibil pentru confirmarea programării.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 text-xs uppercase tracking-widest border-b border-navy pb-1 hover:text-teal hover:border-teal transition cursor-pointer"
              >
                Trimite o altă solicitare
              </button>
            </motion.div>
          ) : (
            <>
              <div className="eyebrow text-teal">Formular discret</div>
              <h3 className="font-serif text-3xl mt-4 font-light">Te sunăm noi.</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-7">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  {...register("website")}
                />
                <div className="space-y-6">
                  <label className="block">
                    <span className="eyebrow text-muted-foreground">Nume complet</span>
                    <input
                      type="text"
                      placeholder="Numele tău"
                      {...register("name")}
                      className="mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition"
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>
                    )}
                  </label>

                  <label className="block">
                    <span className="eyebrow text-muted-foreground">Telefon</span>
                    <input
                      type="tel"
                      placeholder="Numărul de telefon"
                      {...register("phone")}
                      className="mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition"
                    />
                    {errors.phone && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
                    )}
                  </label>

                  <label className="block">
                    <span className="eyebrow text-muted-foreground">Serviciu de interes</span>
                    <select
                      {...register("service")}
                      className="mt-2 w-full bg-transparent border-b border-navy/30 py-3 font-serif text-lg focus:border-teal focus:outline-none transition"
                    >
                      {services.map((s) => (
                        <option key={s.t} value={s.t}>{s.t}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.service.message}</span>
                    )}
                  </label>
                </div>
                <button type="submit" className="group w-full mt-4 bg-navy text-cream py-5 flex items-center justify-between px-6 hover:bg-gold hover:text-navy transition-colors cursor-pointer">
                  <span className="font-serif text-lg">Trimite cererea</span>
                  <span className="text-xs tracking-[0.3em]">→</span>
                </button>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}

