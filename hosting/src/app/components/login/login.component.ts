import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj: any = {
    username: '',
    password: ''
  };
  
  router = inject(Router);

  onLogin() {
    // debugger;
    if (this.loginObj.username == 'admin' && this.loginObj.password == '123') {
      this.router.navigateByUrl('layout');
      localStorage.setItem("userLoggedId","4579");
    } else {
      alert('credenciales invalidas!');
    }
  }
}
