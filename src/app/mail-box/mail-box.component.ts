import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-box',
  imports: [],
  templateUrl: './mail-box.component.html',
  styleUrl: './mail-box.component.css'
})
export class MailBoxComponent {

  user_mail_id:any="";
  user_mail_massage:any=""

  get_mail_email_id(event:Event){
    this.user_mail_id=((event.target as HTMLLIElement).value);
  }

  get_mail_message(message:Event){
    this.user_mail_massage=((message.target as HTMLLIElement).value);
  }

  send_message(){
    alert("message have be sent")
  }

}
