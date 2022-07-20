import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegister(): void {
    this.nuevoUsuario = new NuevoUsuario(this.nombre, this.nombreUsuario, this.email, this.password);
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      data => {
        console.log("Se guardo con exito")

        this.router.navigate(['/login']);
      },
      err => {
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj)

      }
    );
  }

}