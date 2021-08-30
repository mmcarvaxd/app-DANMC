import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  base_url = environment.api_url

  constructor(private http: HttpClient) { }

  create(doc: Documentos, file: File): Observable<any> {
    let formData: FormData = new FormData();
    formData.set('docs', JSON.stringify(doc))
    formData.set('file', file)

    let url = this.base_url + '/documentos'
    return this.http.post<any>(url, formData)
  }

  busca(): Observable<[Documentos]> {
    let url = this.base_url + '/documentos'
    return this.http.get<[Documentos]>(url)
  }

  buscaById(id: string): Observable<Documentos> {
    let url = this.base_url + '/documentos/' + id
    return this.http.get<Documentos>(url)
  }

  download(id: Number): Observable<any> {
    let url = this.base_url + '/documentos/download/' + id

    window.open(url, '_system')
    return EMPTY
  }

  delete(id: Number) {
    let url = this.base_url + '/documentos/' + id
    return this.http.delete<Documentos>(url)
  }
}
