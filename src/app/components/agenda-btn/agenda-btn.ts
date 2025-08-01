import { Component } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-agenda-btn',
  imports: [FaIconComponent],
  templateUrl: './agenda-btn.html',
  styleUrl: './agenda-btn.css'
})
export class AgendaBtn {
  faArrowRight = faArrowRight;
}
