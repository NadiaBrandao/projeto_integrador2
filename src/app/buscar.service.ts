import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {
  private apiUrl = `${environment.api_url}/api/buscar-local`;

  constructor(private http: HttpClient) {}

  buscarLocal(filtros: any): Observable<any> {
    console.log('📡 Enviando requisição para:', this.apiUrl, 'com filtros:', filtros);
    return this.http.post<any>(this.apiUrl, filtros);
}
}

