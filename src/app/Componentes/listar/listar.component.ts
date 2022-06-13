import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetal } from 'src/app/Entidad/Vegetal';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  vegetal: Vegetal[];
  count: number;
  search: String;
  v: Vegetal = new Vegetal();

  constructor(private router: Router, private s: ServicioService) { }

  ngOnInit(): void {
    this.contar();
    this.s.getList().subscribe(res => {
      this.vegetal = res;
    });
  }
  
  editar(v: Vegetal) {
    localStorage.setItem("id", v.id.toString());
    this.router.navigate(["editar"]);
  }

  eliminar(v: Vegetal) {
    localStorage.setItem("id", v.id.toString());
    this.router.navigate(["eliminar"]);
  }

  contar() {
    this.s.count().subscribe(res => {
      this.count = res;
    });
  }

  buscar() {
    this.v.nombre = this.search;
    this.s.search(this.v).subscribe(res => {
      this.vegetal = res;
    })
  }
}
