import { Lista } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transferencias: any[] = [];

  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
  }

  adicionar(lista: Lista): Observable<Lista>{
    return this.httpClient.post<Lista>(this.url, lista);
  }

  public getTransferencias(): Observable<Lista[]>{
    return this.httpClient.get<Lista[]>(this.url);
  }

  get transferencia(){
    return this.transferencias;
  }
}
