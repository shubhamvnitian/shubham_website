import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isSticky = window.scrollY > 50; // Adjust the value as needed
  }

}
