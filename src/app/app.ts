import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faPlay} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Angular-Baleal';

  faPlay = faPlay;
}
