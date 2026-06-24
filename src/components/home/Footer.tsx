import { siteConfig } from "@/config/site";
import clinic from "@/content/clinic.json";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70 py-20 px-8 md:px-14">
      <div className="grid md:grid-cols-12 gap-8 border-b border-cream/15 pb-12">
        <div className="md:col-span-5">
          <div className="font-serif italic text-5xl text-cream">{clinic.name}</div>
          <p className="eyebrow mt-4">{clinic.address}</p>
        </div>
        <div className="md:col-span-4 md:col-start-7 text-sm font-light leading-relaxed">
          Stomatologie de autor pentru cei care prețuiesc detaliul, intimitatea și rezultatele care durează.
        </div>
        <div className="md:col-span-3 text-sm">
          <div className="eyebrow text-cream/40 mb-3">Urmărește</div>
          <div className="space-y-2 font-serif text-lg">
            <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition">Instagram ↗</a>
            <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition">Facebook ↗</a>
            <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition">WhatsApp ↗</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 text-xs text-cream/40">
        <span>© {new Date().getFullYear()} {clinic.name}</span>
        <span>Powered by DDM Marketing</span>
      </div>
    </footer>
  );
}

