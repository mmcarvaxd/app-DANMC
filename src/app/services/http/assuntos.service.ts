import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssuntosService {
  base_url = environment.api_url

  constructor(private http: HttpClient) { }

  busca(): Observable<[Assunto]> {
    let url = this.base_url + '/assuntos'
    return this.http.get<[Assunto]>(url)
  }
}
