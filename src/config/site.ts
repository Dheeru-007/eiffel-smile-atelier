import clinic from "@/content/clinic.json";

export const siteConfig = {
  instagram: clinic.instagram,
  facebook: clinic.facebook,
  googleBusiness: clinic.googleBusiness,
  whatsapp: `https://wa.me/40${clinic.phone.replace(/\s+/g, "").replace(/^0/, "")}`,
  phone: clinic.phone,
  address: clinic.address,
};

