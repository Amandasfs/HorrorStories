import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  email = new FormControl('',[Validators.required, Validators.email]);

  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'Insira um Email Válido!';
    }
    return this.email.hasError('email')? 'Not a valid email': '';
  }
}
