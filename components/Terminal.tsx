"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; tone: "prompt" | "ok" | "plain" };

const LINES: Line[] = [
  { text: "$ git checkout -b feature/landing-turnos", tone: "prompt" },
  { text: "$ pnpm run build", tone: "prompt" },
  { text: "▸ Compilando con Next.js (App Router)…", tone: "plain" },
  { text: "✓ Build completado en 7.8s", tone: "ok" },
  { text: "✓ LCP 0.9s · CLS 0.01 · TTFB 48ms", tone: "ok" },
  { text: "$ vercel --prod", tone: "prompt" },
  { text: "✓ Sitemap.xml generado · Schema.org OK", tone: "ok" },
  { text: "✓ Live → cliente.valenciahq.com", tone: "ok" },
];

const TONE_CLASS: Record<Line["tone"], string> = {
  prompt: "text-muted-onink",
  ok: "text-signal",
  plain: "text-[#D7DCE5]",
};

export default function Terminal() {
  const [shown, setShown] = useState<string[]>([]);
  const [typing, setTyping] = useState("");
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion.current) {
      setShown(LINES.map((l) => l.text));
      return;
    }

    let cancelled = false;
    let lineIndex = 0;

    async function typeLine(text: string) {
      for (let c = 0; c <= text.length; c++) {
        if (cancelled) return;
        setTyping(text.slice(0, c));
        await new Promise((r) => setTimeout(r, 18));
      }
    }

    async function run() {
      while (!cancelled) {
        if (lineIndex >= LINES.length) {
          await new Promise((r) => setTimeout(r, 2600));
          if (cancelled) return;
          setShown([]);
          setTyping("");
          lineIndex = 0;
          continue;
        }
        const line = LINES[lineIndex].text;
        await typeLine(line);
        if (cancelled) return;
        setShown((prev) => [...prev, line]);
        setTyping("");
        lineIndex++;
        await new Promise((r) => setTimeout(r, 260));
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const currentToneIndex = shown.length;

  return (
    <div className="rounded-xl border border-ink-line bg-ink-soft overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink-line">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A4356]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A4356]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A4356]" />
        <span className="ml-2 font-mono text-[11.5px] text-muted-onink">
          deploy — cliente.valenciahq.com
        </span>
      </div>
      <div className="font-mono text-[13px] leading-[1.9] px-5 py-5 min-h-[230px] text-[#D7DCE5]">
        {shown.map((text, i) => (
          <div key={i} className={TONE_CLASS[LINES[i]?.tone ?? "plain"]}>
            {text}
          </div>
        ))}
        {typing && (
          <div className={TONE_CLASS[LINES[currentToneIndex]?.tone ?? "plain"]}>
            {typing}
            <span className="term-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
