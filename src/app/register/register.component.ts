import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register',  //numele componentei
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  @Output('onBackToLogin') backToLoginEvent: EventEmitter<any>= new EventEmitter<any>(); //transmit info din interior in exterior

  email: string ='';
  name: string = '';
  imageUrl: string = '';
  password: string = '';

  constructor(private authService:AuthService) {

  }

  ngOnInit(): void {
  }

  onBackToLoginInClick(): void {
    this.backToLoginEvent.emit();
  }

  onRegisterClicked(): void {
   console.log(this.email);
    console.log(this.name);
    console.log(this.imageUrl);
    console.log(this.password);
    this.authService.register(this.email, this.name, this.imageUrl, this.password).subscribe((response:any)=>{
      console.log(response);  //apelam metoda register  - (ruleaza ca un thread in java (2 rulari in paralel)
    })
  }
}
