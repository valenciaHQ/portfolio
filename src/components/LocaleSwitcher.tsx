"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useTransition } from 'react';
import { routing } from '@/i18n/routing';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next as typeof routing.locales[number] });
      document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    });
  }

  return (
    <button
      onClick={() => switchLocale(locale === 'en' ? 'es' : 'en')}
      disabled={isPending}
      className="text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-300 rounded px-2 py-1 transition-colors hover:bg-gray-50 disabled:opacity-50"
      aria-label="Switch language"
    >
      {locale === 'en' ? 'ES' : 'EN'}
    </button>
  );
}
