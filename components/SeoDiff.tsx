import Reveal from "./Reveal";

const METRICS = [
  {
    label: "Velocidad de carga",
    value: "< 1.5s",
    desc: "Cuanto más rápido carga tu web, menos gente se va antes de verla. (Google lo mide como LCP.)",
  },
  {
    label: "Estabilidad visual",
    value: "Sin saltos",
    desc: "Los botones no se mueven mientras carga la página: menos clics por error, más confianza. (CLS.)",
  },
  {
    label: "Respuesta del servidor",
    value: "~ 40ms",
    desc: "Tu web responde casi al instante, en celular o computadora. (TTFB.)",
  },
];

const FEATURES = [
  {
    title: "Google entiende tu negocio",
    desc: "Cargamos horarios, especialidades y ubicación en el código de la página, para que aparezcas en las búsquedas correctas.",
  },
  {
    title: "Nada que se pierda",
    desc: "Cada página nueva se avisa automáticamente a Google apenas se publica — sin trámites manuales de tu parte.",
  },
  {
    title: "SEO hiperlocal",
    desc: 'Tu web y tu ficha de Google Maps quedan sincronizadas para ganar las búsquedas de "cerca de mí".',
  },
];

export default function SeoDiff() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-12 max-w-xl">
          <span className="mb-3 block font-mono text-[12.5px] text-signal">
            performance://
          </span>
          <h2 className="mb-3.5 text-[1.6rem] font-bold sm:text-[2.15rem]">
            El SEO no es magia. Es ingeniería.
          </h2>
          <p className="max-w-[56ch] text-[15.5px] text-muted-onink">
            Cada decisión técnica está pensada para una sola cosa: que un
            cliente te encuentre en Google antes que a la competencia.
          </p>
        </Reveal>

        <Reveal className="mb-11 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-[10px] border border-ink-line bg-ink-soft p-5"
            >
              <div className="mb-2 font-mono text-xs text-muted-onink">
                {m.label}
              </div>
              <div className="mb-2 font-mono text-[26px] font-semibold text-signal">
                {m.value}
              </div>
              <div className="text-[13.5px] leading-relaxed text-muted-onink">
                {m.desc}
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-7 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h4 className="mb-2 font-display text-[15px] font-bold text-white">
                {f.title}
              </h4>
              <p className="text-[13.5px] leading-relaxed text-muted-onink">
                {f.desc}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
