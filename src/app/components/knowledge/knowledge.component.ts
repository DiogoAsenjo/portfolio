import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Java Icon',
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Spring Icon',
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Node Icon',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular Icon',
    },
  ]);
}
