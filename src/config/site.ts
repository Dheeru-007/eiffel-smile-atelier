import clinic from "@/content/clinic.json";

export const siteConfig = {
  instagram: clinic.instagram,
  facebook: clinic.facebook,
  googleBusiness: clinic.googleBusiness,
  whatsapp: `https://wa.me/40${clinic.phone.replace(/\s+/g, "")}`,
  phone: clinic.phone,
  phone2: clinic.phone2,
  address: clinic.address,
};

