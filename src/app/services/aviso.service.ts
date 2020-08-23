import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvisoService {
  base_url = environment.api_url
  constructor(private http: HttpClient) { }

  busca(): Observable<[Aviso]> {
    let url = this.base_url + '/avisos'
    return this.http.get<[Aviso]>(url)
  }

  buscaId(id: String): Observable<Aviso> {
    let url = this.base_url + '/avisos/' + id
    return this.http.get<Aviso>(url)
  }

  create(aviso: Aviso): Observable<any> {
    let url = this.base_url + '/avisos'
    return this.http.post<any>(url, {aviso})
  }
}
