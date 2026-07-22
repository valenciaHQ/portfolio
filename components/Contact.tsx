import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

export default function Contact() {
  return (
    <section id="contacto" className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-7 md:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <span className="mb-3 block font-mono text-[12.5px] text-signal">
            contacto://
          </span>
          <h2 className="mb-4 text-[1.7rem] font-bold sm:text-[2.4rem]">
            Hablemos 15 minutos
          </h2>
          <p className="mb-7 max-w-[48ch] text-[15.5px] text-muted-onink">
            Contame qué necesita tu negocio y te armo una propuesta a medida —
            sin compromiso, sin jerga técnica de más.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3.5 text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(47,226,138,0.28)]"
          >
            Escribir a Alejandro
          </a>
        </Reveal>

        <Reveal className="flex flex-col gap-3.5">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center justify-between rounded-lg border border-ink-line bg-ink-soft px-4 py-4 transition-colors hover:border-signal"
          >
            <div>
              <div className="font-mono text-[11px] text-muted-onink">
                email
              </div>
              <div className="text-[14.5px] font-medium text-white">
                {siteConfig.email}
              </div>
            </div>
            <span className="font-mono text-signal">→</span>
          </a>
          <a
            href={siteConfig.url}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-between rounded-lg border border-ink-line bg-ink-soft px-4 py-4 transition-colors hover:border-signal"
          >
            <div>
              <div className="font-mono text-[11px] text-muted-onink">
                web
              </div>
              <div className="text-[14.5px] font-medium text-white">
                www.valenciahq.com
              </div>
            </div>
            <span className="font-mono text-signal">→</span>
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener"
            className="flex items-center justify-between rounded-lg border border-ink-line bg-ink-soft px-4 py-4 transition-colors hover:border-signal"
          >
            <div>
              <div className="font-mono text-[11px] text-muted-onink">
                github
              </div>
              <div className="text-[14.5px] font-medium text-white">
                github.com/{siteConfig.githubHandle}
              </div>
            </div>
            <span className="font-mono text-signal">→</span>
          </a>
          <div className="flex items-center justify-between rounded-lg border border-ink-line bg-ink-soft px-4 py-4">
            <div>
              <div className="font-mono text-[11px] text-muted-onink">
                ubicación
              </div>
              <div className="text-[14.5px] font-medium text-white">
                {siteConfig.location}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
