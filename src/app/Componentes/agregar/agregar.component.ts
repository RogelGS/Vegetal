import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetal } from 'src/app/Entidad/Vegetal';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  v: Vegetal = new Vegetal();
  constructor(private router: Router, private s: ServicioService) { }

  ngOnInit(): void {
  }

  guardar() {
    this.s.add(this.v).subscribe(res => {
      alert("SE GUARDO EL ELEMENTO");
      this.router.navigate(["listar"]);
    });
  }
}
