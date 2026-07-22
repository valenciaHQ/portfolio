import Terminal from "./Terminal";

export default function Hero() {
  return (
    <>
      <header className="border-b border-ink-line bg-ink text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-7 py-20 md:grid-cols-[1.05fr_0.95fr] md:gap-14 md:py-24">
          <div>
            <span className="mb-4 inline-block font-mono text-[12.5px] text-signal">
              software a medida · seo técnico · buenos aires
            </span>
            <h1 className="mb-5 font-display text-[2.1rem] font-bold leading-[1.08] sm:text-[2.6rem] lg:text-[3.35rem]">
              Ingeniería,
              <br />
              no artesanía <em className="text-signal not-italic">improvisada</em>.
            </h1>
            <p className="mb-8 max-w-[46ch] text-[17px] text-muted-onink">
              Tu primera web — o la que hace falta renovar — lista en días, no
              en meses. Diseño, desarrollo y SEO técnico pensados para
              negocios chicos que no pueden perder un cliente por una web
              lenta o desactualizada.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(47,226,138,0.28)]"
              >
                Agendar discovery call
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-[14.5px] font-semibold text-white transition-colors hover:border-signal hover:text-signal"
              >
                Ver servicios y precios
              </a>
            </div>
          </div>
          <Terminal />
        </div>
      </header>

      <div className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-7 py-6 md:grid-cols-4">
          <Stat value="48–72h" label="primera entrega (Landing)" />
          <Stat value="50% / 50%" label="anticipo · contra entrega" />
          <Stat value="< 1.5s" label="tiempo de carga promedio" />
          <Stat value="Google Maps" label="incluido en el setup SEO" />
        </div>
      </div>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="font-mono">
      <b className="block text-xl font-semibold text-ink">{value}</b>
      <span className="text-xs text-muted">{label}</span>
    </div>
  );
}
