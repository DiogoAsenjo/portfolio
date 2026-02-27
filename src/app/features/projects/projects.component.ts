import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  QueryList,
  ViewChildren,
  computed,
} from '@angular/core';
import { LanguageService } from '../../core/services/language.service';
import { Subscription } from 'rxjs';

const PROJECT_META: { featured?: boolean }[] = [
  { featured: true },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;
  private sub!: Subscription;

  constructor(public langService: LanguageService) {}

  readonly projects = computed(() =>
    this.langService.t().project_items.map((item, i) => ({
      ...item,
      ...(PROJECT_META[i] ?? {}),
    }))
  );

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    this.observeAll();

    // Re-observe new DOM nodes created on language change, without resetting 'visible'
    this.sub = this.revealElements.changes.subscribe(() => this.observeAll());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.sub?.unsubscribe();
  }

  private observeAll(): void {
    this.revealElements.forEach(el => {
      this.observer.observe(el.nativeElement);
    });
  }
}
