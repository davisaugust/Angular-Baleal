import { Component } from '@angular/core';
import { Header } from "../header/header";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {faPlay, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { AgendaBtn } from "../agenda-btn/agenda-btn";

@Component({
  selector: 'app-home',
  imports: [Header, FaIconComponent, AgendaBtn],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faPlay = faPlay;
  faArrowRight = faArrowRight;
}
