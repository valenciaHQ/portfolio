import Reveal from "./Reveal";

const FEATURED_ADDON = {
  title: "Auditoría y Remediación SEO",
  desc: "Análisis de rendimiento e indexación, one-off",
  price: "USD 150–250",
};

const OTHER_ADDONS = [
  {
    title: "Crecimiento Orgánico Continuo",
    desc: "Retainer mensual, incluye hosting",
  },
  {
    title: "Ficha de Google Business",
    desc: "Reclamo, categorías, fotos y posts iniciales",
  },
  {
    title: "Gestión de Reputación Online",
    desc: "Monitoreo y respuesta a reseñas",
  },
  {
    title: "Campañas Meta Ads",
    desc: "Segmentación local y reporte mensual",
  },
];

export default function Addons() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-12 max-w-xl">
          <span className="mb-3 block font-mono text-[12.5px] text-signal-deep">
            aceleradores://
          </span>
          <h2 className="mb-3.5 text-[1.6rem] font-bold sm:text-[2.15rem]">
            Módulos de crecimiento orgánico
          </h2>
          <p className="max-w-[56ch] text-[15.5px] text-muted">
            Add-ons para clientes que ya tienen web activa pero necesitan
            tráfico, reputación o presencia local constante.
          </p>
        </Reveal>

        <Reveal className="mb-5 flex flex-col items-start justify-between gap-4 rounded-[10px] border border-ink bg-card p-7 sm:flex-row sm:items-center">
          <div>
            <h3 className="mb-1.5 text-[19px] font-bold">
              {FEATURED_ADDON.title}
            </h3>
            <p className="text-[13.5px] text-muted">{FEATURED_ADDON.desc}</p>
          </div>
          <span className="whitespace-nowrap font-mono text-[22px] font-semibold text-signal-deep">
            {FEATURED_ADDON.price}
          </span>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {OTHER_ADDONS.map((a) => (
            <div
              key={a.title}
              className="rounded-[10px] border border-line px-5 py-4"
            >
              <h4 className="mb-1 text-[13.5px] font-semibold text-muted">
                {a.title}
              </h4>
              <p className="text-[12px] text-muted">{a.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
