import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NivelAcessoService {
  base_url = environment.api_url
  constructor(private http: HttpClient) { }

  busca(): Observable<[NivelAcesso]> {
    let url = this.base_url + '/nivelacesso'
    return this.http.get<[NivelAcesso]>(url)
  }
}
