import { siteConfig } from "@/config/site";

export function StickyMobile() {
  const phoneHref = siteConfig.phone
    ? `tel:${siteConfig.phone.replace(/\s+/g, "")}`
    : "#programare";

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-navy-deep text-cream grid grid-cols-3 border-t border-cream/15">
      <a href="#programare" aria-label="Programare din meniul mobil" className="py-4 text-center border-r border-cream/15 flex flex-col items-center gap-1">
        <span className="text-lg">📅</span>
        <span className="text-[10px] uppercase tracking-widest">Programare</span>
      </a>
      <a href={siteConfig.whatsapp || "#programare"} target={siteConfig.whatsapp ? "_blank" : undefined} rel="noopener noreferrer" aria-label="Contactați-ne pe WhatsApp din meniul mobil" className="py-4 text-center border-r border-cream/15 flex flex-col items-center gap-1">
        <span className="text-lg">💬</span>
        <span className="text-[10px] uppercase tracking-widest">WhatsApp</span>
      </a>
      <a href={phoneHref} className="py-4 text-center flex flex-col items-center gap-1 bg-gold text-navy">
        <span className="text-lg">📞</span>
        <span className="text-[10px] uppercase tracking-widest">Sună</span>
      </a>
    </div>
  );
}
