import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/IExperience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  public arrayExperience = signal<IExperience[]>([
    {
      summary: {
        strong: 'Desenvolvedor de Software',
        p: 'ModalGR | Julho 2023 -  Presente',
      },
      text: `
      <p>Desenvolvimento, implementação e manutenção de APIs utilizando Java, Node.js e Python.</p>
      <p>Mapeamento de processos com as áreas beneficiadas para entender suas necessidades, levantar os requisitos, mapear soluções e definir o escopo dos projetos</p>
      <p>Automação de processos que antes eram feitos por e-mail em dias passando a ser realizados em horas com menos erros e maior rastreabilidade.</p>
      <p>Criação e manutenção de dashboards simples utilizando Power BI.</p>
      <p>Treinamento de usuários e monitoramento do uso da plataforma, corrigindo bugs, mapeando e aplicando melhorias contínuas.</p>
      `,
    },
    {
      summary: {
        strong: 'Estágio | Mentoria',
        p: 'Creath Digital | Fevereiro 2023 - Setembro 2024',
      },
      text: `
      <p>Realização de testes manuais para garantir que as aplicações funcionem conforme prometido.</p>
      <p>Participação ativa no Desing Sprint para viabilizar uma solução para o cliente.</p>
      <p>Acompanhamento de equipes de programação para entender na prática metodologias como Scrum e Kanban.</p>
      <p>Imersão com profissionais da área que compartilham suas experiência com DevOps, Cloud Computing e UX/UI, etc</p>
      `,
    },
    {
      summary: {
        strong: 'Assessor Jurídico',
        p: 'Defensoria Pública da União | Julho 2019 - Julho 2023',
      },
      text: `
      <p>Apesar de se tratar de um trabalho de âmbito jurídico há diversas habilidade que podem ser transferidas para área de tecnologia, como o trabalho em equipe, controle de prazo e tarefas, atendimento ao público, liderança de equipe, constante mudança e necessidade de adaptação rápida para solucionar o problema de clientes, entre outras atribuições.</p>
      `,
    },
  ]);
}
