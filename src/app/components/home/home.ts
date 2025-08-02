import { Component } from '@angular/core';
import { Header } from '../header/header';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AgendaBtn } from '../agenda-btn/agenda-btn';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Header, FaIconComponent, AgendaBtn, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  faPlay = faPlay;
  faArrowRight = faArrowRight;

  menuGrid = [
    {
      label: 'Assessoria de Marketing',
      text: 'A nossa Assessoria de Marketing se trata de um pacote completo de marketing de resultado.',
    },
    {
      label: 'Diagnóstico e Estratégia',
      text: 'Iniciamos com uma reunião de alinhamento para entender seu negócio, cliente ideal e metas. ',
    },
    {
      label: 'Infraestrutura e Configuração',
      text: 'Preparamos toda a base técnica: contas de anúncios, hospedagem, domínio, pixels e tags. ',
    },
    {
      label: 'Materiais Publicitários',
      text: 'Desenvolvemos roteiros, vídeos e artes personalizados para anúncios e redes sociais.',
    },
    {
      label: 'Desenvolvimento Web',
      text: 'Sites totalmente profissionais e responsivos para posicionar o seu negócio da melhor forma.',
    },
    {
      label: 'Gestão de Anúncios',
      text: 'Anúncios no Google, Facebook e Instagram com foco absoluto em aumento de vendas.',
    },
    {
      label: 'Relatórios Profissionais',
      text: 'Relatórios semanais e mensal, todos com informações claras para decisões das próximas etapas.',
    },
    {
      label: 'Suporte Comercial e Materiais Extras',
      text: 'Oferecemos materiais de apoio para o atendimento de leads, dicas de gravação e mais. ',
    },
  ];
}
