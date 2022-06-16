import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  constructor( private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtbuscar') txtbuscar!: ElementRef<HTMLInputElement>;

  buscar(){
    const valor = this.txtbuscar.nativeElement.value;
    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.txtbuscar.nativeElement.value = '';
  }
}
