import Reveal from "./Reveal";

const GROUPS = [
  { title: "Frontend", chips: ["Next.js", "React", "TypeScript", "Remix", "Tailwind CSS"] },
  { title: "Backend", chips: ["NestJS", "PostgreSQL", "Supabase"] },
  { title: "Infraestructura", chips: ["Vercel", "AWS", "GitHub Actions"] },
];

export default function StackSection() {
  return (
    <section id="stack" className="py-20">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal className="mb-12 max-w-xl">
          <span className="mb-3 block font-mono text-[12.5px] text-signal-deep">
            stack://
          </span>
          <h2 className="mb-3.5 text-[1.6rem] font-bold sm:text-[2.15rem]">
            Ecosistema JavaScript / TypeScript moderno
          </h2>
          <p className="max-w-[56ch] text-[15.5px] text-muted">
            Las mismas herramientas para una landing de 48hs que para un
            producto a medida completo.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h3 className="mb-3.5 font-mono text-xs uppercase tracking-wider text-muted">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.chips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-md border border-line bg-white px-3 py-1.5 font-mono text-[12.5px] text-text"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
