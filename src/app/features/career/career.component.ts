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


@Component({
  selector: 'app-career',
  standalone: true,
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  private observer!: IntersectionObserver;
  private sub!: Subscription;

  constructor(public langService: LanguageService) {}

  readonly career = computed(() => this.langService.t().career_items);

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

    // Re-observe whenever the list changes (e.g. language toggle re-renders items)
    this.sub = this.revealElements.changes.subscribe(() => {
      this.observeAll();
    });
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
