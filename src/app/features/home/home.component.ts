import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('reveal') revealElements!: QueryList<ElementRef>;

  readonly techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Angular', icon: '🔴' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Docker', icon: '🐳' },
    { name: 'REST APIs', icon: '🔌' },
    { name: 'Automation', icon: '⚙️' },
    { name: 'Git', icon: '🌿' },
    { name: 'Linux', icon: '🐧' },
  ];

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
