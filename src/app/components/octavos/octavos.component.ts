import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { GetPaisIconService } from 'src/app/services/get-pais-icon.service';

@Component({
  selector: 'app-octavos',
  templateUrl: './octavos.component.html',
  styleUrls: ['./octavos.component.scss']
})
export class OctavosComponent implements OnInit {

  constructor(private fb : FormBuilder, private paises : GetPaisIconService) { }
  @Input() octavos: any;
  @Input() prueba: any = [];
  @Output() resultados = new EventEmitter();
  equipos: any = [];
  partidos: any [] = [];
  grupos : any = ['AB','CD','EF','GH']
  formOctavos = this.fb.group({
    octavos : this.fb.array([])
  })
  ngOnInit(): void {
    // this.formOctavos = this.fb.group({
    //   octavos : this.fb.array([])
    // })
    this.formOctavos.valueChanges.subscribe(e => this.resultados.emit(e))
    if (this.prueba.length){
      console.log('prueba')
      this.octavos = this.prueba
      this.obtenerOctavos()
      
      this.partidos.flat().map((partido) => {
    
        this.agregarPartido(partido)
      })
    }
    
    // console.log(this.partidos)
  }

  getIcono(pais : any){
    return this.paises.getIcono(pais)
  }

  
  ngOnChanges(changes: SimpleChanges) { 
  if(this.prueba){
    this.obtenerOctavos()
    this.partidos.flat().map((partido) => {
        this.agregarPartido(partido)
    })
  }
  }

  get partidosOctavos() {
    return this.formOctavos.controls['octavos'] as FormArray;
  }

   agregarPartido(partido : any){

    const agregado = this.partidosOctavos.value.findIndex((form : any) => form.grupo === partido.grupo)
   
    if (agregado !== -1){
    const newValue = {
      paisA: partido['HomeTeam'] || '',
      golesA:'',
      paisB: partido['AwayTeam'] || '',
      golesB:'',
      penalesA:'',
      penalesB:'',
      ganador:'',
      grupo:partido.grupo
    }
      this.partidosOctavos.controls[agregado].setValue({...newValue})
    } else {
      const form = this.fb.group({
        paisA: [partido['HomeTeam']],
        golesA:[''],
        paisB: [partido['AwayTeam']],
        golesB:[''],
        penalesA:[''],
        penalesB:[''],
        ganador:[''],
        grupo:[partido.grupo]
      }) 
      this.agregarValueChanges(form)
      this.partidosOctavos.push(form)
    }

  }


  agregarValueChanges(form : any){
    form.valueChanges.subscribe((e : any) => {
      const {paisA,paisB,golesA,golesB,penalesA,penalesB} = e;
      if (golesA && golesB){
        if (parseInt(golesA) === parseInt(golesB)){
          form['controls'].ganador.setValue('',{emitEvent: false})
          if (penalesA && penalesB){
            if (parseInt(penalesA) > parseInt(penalesB)){
              form['controls'].ganador.setValue(paisA,{emitEvent: false})
            } else {
              form['controls'].ganador.setValue(paisB,{emitEvent: false})
            }
          }
        } else if (parseInt(golesA) > parseInt(golesB)){
          form['controls'].ganador.setValue(paisA,{emitEvent: false})
        } else {
          form['controls'].ganador.setValue(paisB,{emitEvent: false})
        }
      }
      return e
    })
  }
  obtenerOctavos(){
    
    this.equipos = this.octavos.reduce((acc:any,e : any)=>{
      const {grupo,puntaje} = e;
      let array = [...puntaje]
      let primerLugar = this.obtenerPrimerLugar(array)
      let index = puntaje.findIndex((p : any) => p.pais === primerLugar)
      array.splice(index,1)
      let segundoLugar = this.obtenerPrimerLugar(array)
      acc.push({grupo:grupo.split(' ')[1],primerLugar,segundoLugar})
      return acc
      
    },[])
    
    this.partidos = this.grupos.map((grupo : string) =>{
      let partidos : any [] = []
      this.equipos.map((equipo : any) => {
        if (grupo.includes(equipo.grupo)){
          if (!partidos.length){
            partidos.push({'HomeTeam':equipo.primerLugar,grupo: grupo + 1},{'AwayTeam':equipo.segundoLugar, grupo: grupo + 2})
          } else {
            let index = partidos.findIndex((e) => e['HomeTeam'])
            let index1 = partidos.findIndex((e) => e['AwayTeam'])
            partidos[index]['AwayTeam'] = equipo.segundoLugar
            partidos[index1]['HomeTeam'] = equipo.primerLugar
          }
        }
      })
      return partidos
    }) 
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
