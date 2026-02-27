import { Injectable, signal, computed } from '@angular/core';
import { translations, Language } from '../i18n/translations';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly STORAGE_KEY = 'portfolio-lang';

  readonly lang = signal<Language>(this.getInitialLang());

  /** Reactive shortcut: current translation object */
  readonly t = computed(() => translations[this.lang()]);

  toggle(): void {
    const next: Language = this.lang() === 'en' ? 'pt' : 'en';
    this.lang.set(next);
    localStorage.setItem(this.STORAGE_KEY, next);
  }

  private getInitialLang(): Language {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === 'en' || stored === 'pt') return stored;
    // Default: English (targeting international jobs)
    return 'pt';
  }
}
