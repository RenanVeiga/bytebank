import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Lista } from '../models/transferencia.model';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  public transferencias: Lista[];

  constructor(private service: TransferenciaService) {

  }

  ngOnInit(): void {
    this.service.getTransferencias().subscribe((lista: Lista[]) =>{
      console.table();
      this.transferencias = lista;
    })
  }


}








