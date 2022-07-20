import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoginUsuario } from '../models/login-usuario';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;

  errMsj?: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['/']);
      },
      err => {
        this.errMsj = err.error.message;
        console.log(this.errMsj);
      }
    );
  }

}