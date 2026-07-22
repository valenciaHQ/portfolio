export default function Footer() {
  return (
    <footer className="border-t border-line py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2.5 px-7">
        <p className="font-mono text-[12.5px] text-muted">
          © {new Date().getFullYear()} valencia://hq — Alejandro Valencia
        </p>
        <p className="font-mono text-[12.5px] text-muted">
          Senior Full-Stack Engineer & Tech Lead
        </p>
      </div>
    </footer>
  );
}
