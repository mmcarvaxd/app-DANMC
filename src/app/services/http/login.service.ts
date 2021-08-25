import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  base_url = environment.api_url

  constructor(private http: HttpClient) { }

  login(usuario: String, senha: String): Observable<Usuario> {
    var url = this.base_url + '/auth'
    return this.http.post<Usuario>(url, {
      login: usuario,
      senha
    })
  }
}
