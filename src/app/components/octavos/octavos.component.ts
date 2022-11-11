import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-octavos',
  templateUrl: './octavos.component.html',
  styleUrls: ['./octavos.component.scss']
})
export class OctavosComponent implements OnInit {

  constructor() { }
  @Input() octavos: any;
  equipos: any = [];
  ngOnInit(): void {
    console.log(this.octavos)
  }

  
  ngOnChanges(changes: SimpleChanges) {    
    this.obtenerOctavos()
  }

  obtenerOctavos(){
    this.equipos = this.octavos.reduce((acc:any,e : any)=>{
      const {grupo,puntaje} = e;
      let array = [...puntaje]
      let primerLugar = this.obtenerPrimerLugar(array)
      let index = puntaje.findIndex((p : any) => p.pais === primerLugar)
      array.splice(index,1)
      let segundoLugar = this.obtenerPrimerLugar(array)
      acc.push({grupo,primerLugar,segundoLugar})
      return acc
      
    },[]) 
    console.log(this.equipos)
  }
  
  obtenerPrimerLugar(puntaje : any){
      let primerLugar = puntaje[0]
      puntaje.map((equipo:any)=>{
        if (equipo.ptos > primerLugar.ptos){
          primerLugar = equipo
        } else if (equipo.ptos === primerLugar.ptos) {
          if (equipo.dif > primerLugar.dif ){
            primerLugar = equipo
          } else if (equipo.dif === primerLugar.dif){
            if (equipo.gf > primerLugar.gf ){
              primerLugar = equipo
            }
          } 
        }
      })
      return primerLugar.pais;
  }

}
