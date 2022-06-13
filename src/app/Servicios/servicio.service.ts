import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vegetal } from '../Entidad/Vegetal';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:7000/APIVEGETAL/";

  getList() {
    return this.http.get<Vegetal[]>(this.url+"LISTAR");
  }
  
  add(v: Vegetal) {
    return this.http.post<Vegetal>(this.url+"GUARDAR", v);
  }

  edith(v: Vegetal) {
    return this.http.post<Vegetal>(this.url+"EDITAR", v);
  }

  delete(v: Vegetal) {
    return this.http.post<Vegetal>(this.url+"ELIMINAR", v);
  }

  find(v: Vegetal) {
    return this.http.post<Vegetal>(this.url+"BUSCAR", v);
  }

  count() {
    return this.http.get<number>(this.url+"CONTAR");
  }

  search(v: Vegetal) {
    return this.http.post<Vegetal[]>(this.url+"SEARCH", v);
  }
}
