import Reveal from "./Reveal";

const ADDONS = [
  {
    title: "Auditoría y Remediación SEO",
    desc: "Análisis de rendimiento e indexación, one-off",
    price: "USD 150–250",
  },
  {
    title: "Crecimiento Orgánico Continuo",
    desc: "Retainer mensual, incluye hosting",
    price: "USD 150–300/mes",
  },
  {
    title: "Ficha de Google Business",
    desc: "Reclamo, categorías, fotos y posts iniciales",
    price: "USD 100–150",
  },
  {
    title: "Gestión de Reputación Online",
    desc: "Monitoreo y respuesta a reseñas",
    price: "USD 100–200/mes",
  },
  {
    title: "Campañas Meta Ads",
    desc: "Segmentación local y reporte mensual",
    price: "USD 150–300/mes + pauta",
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

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ADDONS.map((a) => (
            <div
              key={a.title}
              className="flex items-center justify-between gap-4 rounded-[10px] border border-line bg-white px-5 py-5"
            >
              <div>
                <h4 className="mb-1 text-[14.5px] font-semibold">{a.title}</h4>
                <p className="text-[12.5px] text-muted">{a.desc}</p>
              </div>
              <span className="whitespace-nowrap font-mono text-[13px] font-semibold text-signal-deep">
                {a.price}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
