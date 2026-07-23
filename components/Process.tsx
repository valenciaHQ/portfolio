import Reveal from "./Reveal";

const PHASES = [
  {
    n: "01",
    title: "Discovery & Scoping",
    desc: "Relevamiento de requerimientos, definición de alcance y anticipo del 50%.",
    deliverable: "Propuesta + cronograma",
  },
  {
    n: "02",
    title: "Prototipado IA",
    desc: "Generación de UI para validar la estructura antes de programar una sola línea.",
    deliverable: "Wireframe + preview link",
  },
  {
    n: "03",
    title: "Setup de proyecto",
    desc: "Repositorio, stack, variables de entorno y conexión a hosting.",
    deliverable: "Proyecto organizado y respaldado",
  },
  {
    n: "04",
    title: "Desarrollo iterativo",
    desc: "Sprints cortos, commits atómicos y deploys de preview automáticos.",
    deliverable: "Preview por feature",
  },
  {
    n: "05",
    title: "QA & Code Review",
    desc: "Revisión propia (o de un segundo reviewer) y testing manual/automatizado.",
    deliverable: "Código revisado y probado",
  },
  {
    n: "06",
    title: "Entrega & Deploy",
    desc: "Deploy a producción, verificación de Core Web Vitals y checklist SEO.",
    deliverable: "Sitio en producción",
  },
  {
    n: "07",
    title: "Soporte post-entrega",
    desc: "Ventana de ajustes menores y documentación de traspaso.",
    deliverable: "README + garantía 15 días",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-12 max-w-xl">
          <span className="mb-3 block font-mono text-[12.5px] text-signal-deep">
            proceso://
          </span>
          <h2 className="mb-3.5 text-[1.6rem] font-bold sm:text-[2.15rem]">
            Un mismo estándar, de la landing al MVP
          </h2>
          <p className="max-w-[56ch] text-[15.5px] text-muted">
            Repositorio versionado, revisión de código y despliegue
            reproducible en cada proyecto — la velocidad no se negocia con la
            calidad.
          </p>
        </Reveal>

        <Reveal className="flex flex-col">
          {PHASES.map((phase, i) => (
            <div
              key={phase.n}
              className={`grid grid-cols-[44px_1fr] items-start gap-5 border-t border-line py-5 sm:grid-cols-[70px_1fr_200px] ${
                i === PHASES.length - 1 ? "border-b" : ""
              }`}
            >
              <span className="font-mono text-xl font-semibold text-line sm:text-[22px]">
                {phase.n}
              </span>
              <div>
                <h3 className="mb-1.5 text-base font-bold">{phase.title}</h3>
                <p className="text-[13.5px] text-muted">{phase.desc}</p>
              </div>
              <span className="hidden self-center rounded-md border border-signal-deep/25 bg-signal/10 px-2.5 py-2 text-center font-mono text-[11.5px] text-signal-deep sm:block">
                {phase.deliverable}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
