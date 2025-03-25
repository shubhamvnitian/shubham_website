import { Component } from '@angular/core';
import { MidleComponent } from "../midle/midle.component";
import { MailBoxComponent } from "../mail-box/mail-box.component";

@Component({
  selector: 'app-home',
  imports: [MailBoxComponent, MidleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
