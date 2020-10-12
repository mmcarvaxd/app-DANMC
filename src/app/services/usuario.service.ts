import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  base_url = environment.api_url
  constructor(private http: HttpClient) { }

  create(usuario: Usuario): Observable<any> {
    let url = this.base_url + '/usuario'
    return this.http.post<any>(url, {usuario})
  }

  saveUser(usuario: Usuario): Observable<any> {
    let url = this.base_url + `/usuario/${usuario.id}`
    return this.http.put(url, {usuario})
  }
}
