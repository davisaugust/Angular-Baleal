import { Component } from '@angular/core';
import { Header } from "../header/header";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import {faPlay, faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  imports: [Header, FaIconComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  faPlay = faPlay;
  faArrowRight = faArrowRight;
}
