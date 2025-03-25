import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  usser_name:any=""
  usser_mail_id:any=""
  usser_message:any=""
  get_name(event:Event){
    this.usser_name=((event.target as HTMLLIElement).value);
  }

  get_mail_id(mail_id:Event){
    this.usser_mail_id=((mail_id.target as HTMLLIElement).value);
  }

  get_message(message:Event){
    this.usser_message=((message.target as HTMLLIElement).value);

  }

  send_message(){
    alert("message have been sent")
  }

}
