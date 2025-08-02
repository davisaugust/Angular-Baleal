import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [FaIconComponent, RouterModule, CommonModule],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  faWhatsapp = faWhatsapp;

  menuItems = [
    { label: 'INÍCIO', link: '/' },
    { label: 'SERVIÇOS', link: '/' },
    { label: 'MOTIVOS', link: '/' },
    { label: 'SOBRE', link: '/' },
    { label: 'FAQ', link: '/' }
  ];
}
