import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
//https://www.emailjs.com/docs/sdk/installation/
//https://www.youtube.com/watch?v=4LwtgjE9r44&t=38s

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor() {
  }

  public EmailForm : FormGroup = new FormGroup({
    from_name : new FormControl(null),
    from_email : new FormControl(null),
    subject : new FormControl(null),
    message : new FormControl(null)
  })

public send(){
  emailjs.send('service_mlrh7jk','template_sxx3h27', this.EmailForm.getRawValue(), 'h43h2O7s95hnICGfF')
	.then((response:any) => {	   
    alert("Thanks, Your inquiry has been sent");
	}, (err:any) => {
	   console.log('FAILED...', err);
	});
}

}
