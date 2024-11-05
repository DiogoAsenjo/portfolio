import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Java',
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: 'Spring',
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Node.js',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular',
    },
  ]);
}
