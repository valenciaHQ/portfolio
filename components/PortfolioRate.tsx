import Reveal from "./Reveal";

export default function PortfolioRate() {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-6xl px-7">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-[10px] border border-[#F0DDB2] bg-gradient-to-br from-[#FFF7EA] to-[#FDF1DF] p-8 sm:flex-row sm:items-center">
            <div>
              <h3 className="mb-2 text-lg font-bold">Tarifa Portfolio</h3>
              <p className="max-w-[52ch] text-sm text-[#7A6635]">
                Precio promocional en proyectos seleccionados a cambio de un
                testimonio en video y autorización para publicar el caso de
                estudio en valenciahq.com.
              </p>
            </div>
            <span className="whitespace-nowrap rounded-md bg-amber px-3.5 py-2 font-mono text-[11.5px] font-semibold text-[#9A6B00]">
              cupos limitados por mes
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
