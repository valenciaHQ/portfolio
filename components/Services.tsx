import Reveal from "./Reveal";

type Service = {
  tag: string;
  name: string;
  price: string;
  meta: string;
  featured?: boolean;
  items: string[];
};

const SERVICES: Service[] = [
  {
    tag: "Web + SEO",
    name: 'Landing "Impulso"',
    price: "USD 250–350",
    meta: "Tiempo estimado: 48 a 72 horas",
    items: [
      "Diseño responsivo de conversión",
      "Formulario de captura de leads",
      "Despliegue de alta performance",
      "Setup de Google Maps / Google Negocios",
    ],
  },
  {
    tag: "Web + SEO",
    name: "Sitio Institucional",
    price: "USD 450–650",
    meta: "Arquitectura SEO completa",
    featured: true,
    items: [
      "Estructura multi-página",
      "Optimización de keywords por servicio",
      "Metaetiquetas estructuradas",
      "Core Web Vitals optimizados",
    ],
  },
  {
    tag: "Producto a medida",
    name: "Desarrollo a Medida",
    price: "USD 600–900",
    meta: "Rango según alcance del proyecto",
    items: [
      "Definición de MVP: alcance y prioridades",
      "Diseño de producto (UX/UI)",
      "Desarrollo end-to-end",
      'Landing "Impulso" para lanzar el producto',
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-12 max-w-xl">
          <span className="mb-3 block font-mono text-[12.5px] text-signal-deep">
            servicios://
          </span>
          <h2 className="mb-3.5 text-[1.6rem] font-bold sm:text-[2.15rem]">
            Sitios que aparecen en Google desde el día uno
          </h2>
          <p className="max-w-[56ch] text-[15.5px] text-muted">
            Tres formatos de entrega según el problema del negocio: presencia
            local, arquitectura institucional o un producto a medida.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Reveal key={s.name}>
              <div
                className={`flex h-full flex-col rounded-[10px] border bg-card p-7 transition-all hover:-translate-y-1 ${
                  s.featured
                    ? "border-ink"
                    : "border-line hover:border-signal-deep"
                }`}
              >
                <span className="mb-3.5 font-mono text-[10.5px] uppercase tracking-wider text-muted">
                  {s.tag}
                </span>
                <h3 className="mb-1.5 text-[19px] font-bold">{s.name}</h3>
                <p className="mt-2.5 mb-1 font-mono text-[22px] font-semibold text-signal-deep">
                  {s.price}
                </p>
                <p className="mb-4 font-mono text-[12.5px] text-muted">
                  {s.meta}
                </p>
                <ul className="mb-1 flex flex-1 flex-col gap-2.5">
                  {s.items.map((item) => (
                    <li key={item} className="relative pl-4 text-sm text-text">
                      <span className="absolute left-0 text-[13px] text-signal-deep">
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
