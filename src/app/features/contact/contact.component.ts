import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  constructor(public langService: LanguageService) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    this.revealElements.forEach(el => {
      el.nativeElement.classList.add('reveal');
      observer.observe(el.nativeElement);
    });
  }
}
