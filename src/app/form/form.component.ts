import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  

  send_message(){
    alert("FORM SUMMITED !!!")
  }

  insta_y_n:any="";
  school_data:any="";
  name_data:any="";
  father_data:any="";
  mother_data:any="";
  age_data:any="";
  gender_data:any="";
  grad_data:any="";
  dob_data:any="";


  instdetail_name(inst:Event){
    this.insta_y_n=((inst.target as HTMLLIElement).value);
  }

  school_name(school:Event){
    this.school_data=((school.target as HTMLLIElement).value);
  }

  your_name(name:Event){

    this.name_data=((name.target as HTMLLIElement).value);

    
  }

  father_name(father:Event){    
    this.father_data=((father.target as HTMLLIElement).value);
  }

  mother_name(mother:Event){
    this.mother_data=((mother.target as HTMLLIElement).value);

  }
  age_name(age:Event){
    this.age_data=((age.target as HTMLLIElement).value);

  }
  dob_name(dob:Event){
    this.dob_data=((dob.target as HTMLLIElement).value);

  }
  gender_name(gender:Event){
    this.gender_data=((gender.target as HTMLLIElement).value);

  }
  grad_name(grad:Event){
    this.grad_data=((grad.target as HTMLLIElement).value);

  }

}
