import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {
  base_url = environment.api_url
  constructor(private http: HttpClient) { }

  busca(): Observable<[Turma]> {
    let url = this.base_url + '/turma'
    return this.http.get<[Turma]>(url)
  }
}
