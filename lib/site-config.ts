export const siteConfig = {
  name: "ValenciaHQ",
  title: "ValenciaHQ — Desarrollo Web, Sistemas a Medida y SEO Técnico",
  description:
    "Ingeniería, no artesanía improvisada. Landing pages, sitios institucionales, productos a medida y SEO técnico para negocios de cualquier rubro. Buenos Aires, Argentina.",
  // TODO: si el sitio termina viviendo en un subdominio en algún momento
  // (staging), actualizar esto y el metadataBase en app/layout.tsx.
  url: "https://www.valenciahq.com",
  email: "alejandro.valencia.dev@gmail.com",
  github: "https://github.com/valenciaHQ",
  githubHandle: "valenciaHQ",
  location: "Buenos Aires, Argentina",
  locale: "es_AR",
  whatsapp: "5491140317830",
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Hola! Quiero agendar una discovery call para hablar sobre mi proyecto.",
)}`;
