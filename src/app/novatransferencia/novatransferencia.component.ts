import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from '../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './novatransferencia.component.html',
  styleUrls: ['./novatransferencia.component.scss']
})
export class NovatransferenciaComponent implements OnInit {

  constructor(private service: TransferenciaService, private router:Router ) { }

  ngOnInit(): void {
  }

  valor: number;
  destino: string;


  transferencia(){

    const emitir: Lista = {data:Date(), valor: this.valor, destino: this.destino}
    this.service.adicionar(emitir).subscribe((resultado)=>{
      console.log(resultado);
      this.limparcampo();
      this.router.navigateByUrl('extrato');
    },
    (error)=> console.log(error));


  }

  limparcampo(){
    this.valor = undefined;
    this.destino = undefined;

  }
}
