export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <div className="font-mono text-base font-semibold tracking-tight">
          valencia<span className="text-signal-deep">://</span>hq
        </div>
        <div className="flex items-center gap-7">
          <a
            href="#servicios"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-text sm:inline"
          >
            servicios
          </a>
          <a
            href="#proceso"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-text sm:inline"
          >
            proceso
          </a>
          <a
            href="#stack"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-text sm:inline"
          >
            stack
          </a>
          <a
            href="#contacto"
            className="rounded-md bg-ink px-4 py-2 font-mono text-[13px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-signal-deep"
          >
            Agendar call
          </a>
        </div>
      </div>
    </nav>
  );
}
