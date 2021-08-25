import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemasService {
  base_url = environment.api_url
  constructor(private http: HttpClient) { }

  busca(): Observable<Tema[]> {
    let url = this.base_url + '/tema'
    return this.http.get<Tema[]>(url)
  }
}

