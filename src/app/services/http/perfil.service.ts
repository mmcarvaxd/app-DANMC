import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  base_url = environment.api_url
  constructor(private http: HttpClient) { }

  busca(): Observable<[Perfil]> {
    let url = this.base_url + '/perfil'
    return this.http.get<[Perfil]>(url)
  }
}
