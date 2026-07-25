import Reveal from "./Reveal";

type GestionTier = {
  tag: string;
  name: string;
  price: string;
  meta: string;
  items: string[];
};

const GESTION_SERVICES: GestionTier[] = [
  {
    tag: "Sistemas Internos",
    name: "Plataforma de Gestión Inmobiliaria (CRM + Listings)",
    price: "USD 1,200–2,000",
    meta: "MVP · inmobiliarias y agentes independientes",
    items: [
      "Panel de administración",
      "Carga de propiedades con galería de imágenes y geolocalización",
      "Gestión multi-agente con permisos diferenciados",
      "Portal de búsqueda para clientes",
      "Captura y seguimiento de leads",
    ],
  },
];

export default function GestionSection() {
  return (
    <section id="gestion" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-12 max-w-xl">
          <span className="mb-3 block font-mono text-[12.5px] text-signal-deep">
            gestión://
          </span>
          <h2 className="mb-3.5 text-[1.6rem] font-bold sm:text-[2.15rem]">
            Sistemas a medida para operar tu negocio
          </h2>
          <p className="max-w-[56ch] text-[15.5px] text-muted">
            Soluciones de gestión internas para negocios que necesitan
            centralizar propiedades, agentes, leads o cualquier otro flujo de
            operación en un solo panel.
          </p>
        </Reveal>

        <div className="grid grid-cols-1">
          {GESTION_SERVICES.map((s) => (
            <Reveal key={s.name} className="max-w-md">
              <div className="flex h-full flex-col rounded-[10px] border border-line bg-card p-7 transition-all hover:-translate-y-1 hover:border-signal-deep">
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
