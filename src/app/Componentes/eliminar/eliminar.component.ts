import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetal } from 'src/app/Entidad/Vegetal';
import { ServicioService } from 'src/app/Servicios/servicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  v: Vegetal= new Vegetal();
  constructor(private router: Router, private s: ServicioService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.v.id =+ Number(localStorage.getItem("id"));
    this.s.find(this.v).subscribe(res => {
      this.v = res;
    });
  }
  
  eliminar() {
    this.s.delete(this.v).subscribe(res => {
      alert("SE ELIMINO EL ITEM");
      this.router.navigate(["listar"]);
    });
  }
}
