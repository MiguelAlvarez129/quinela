import { Component, OnInit, Input, Output, EventEmitter , SimpleChange} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cuartos',
  templateUrl: './cuartos.component.html',
  styleUrls: ['./cuartos.component.scss']
})
export class CuartosComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }
  @Input() cuartos: any;
  @Input() prueba : any = [];
  @Input() grupos : string[] = [];
  @Output() resultados = new EventEmitter();
  formCuartos = this.fb.group({
    cuartos : this.fb.array([])
  })
  partidos : any = [];
  

  ngOnInit(): void {
    this.formCuartos.valueChanges.subscribe((e) => this.resultados.emit(e))
    if (this.prueba.length){
      this.cuartos = this.prueba
      this.obtenerCuartos()
      this.partidos.map((partido : any) => {
        this.agregarPartido(partido)
      })
    }
  }
 
  ngOnChanges(changes : any) { 
  changes.cuartos.currentValue.length
   
      if (changes.cuartos.currentValue.length){
        
        if(!this.prueba.length){
        this.obtenerCuartos()
        this.partidos.map((partido : any) => {
          this.agregarPartido(partido)
        })
      }
    
  
    }
  }

  get partidosCuartos() {
    return this.formCuartos.controls['cuartos'] as FormArray;
  }

  obtenerCuartos(){
    this.partidos = this.grupos.map((grupo)=>{
      let partido : any  = {}
      this.cuartos.map((resultado : any) => {
        const keys = Object.keys(partido)
        if (grupo.includes(resultado.grupo)){
          if (!keys.length){ 
            partido = {
              paisA:resultado.ganador,
              golesA:'',
              golesB:'',
              paisB:'',
              penalesA:'',
              penalesB:'',
              grupo
            }
          } else {
            partido.paisB = resultado.ganador
          }
        } 
      })
      return partido
    })
  }

  agregarPartido(partido : any){
    const agregado = this.partidosCuartos.value.findIndex((form : any) => form.grupo === partido.grupo)
 

    if (agregado !== -1){
    const newValue = {
      paisA: partido['paisA'] || '',
      golesA:'',
      paisB: partido['paisB'] || '',
      golesB:'',
      penalesA:'',
      penalesB:'',
      ganador:'',
      perdedor:'',
      grupo:partido.grupo
    }
      this.partidosCuartos.controls[agregado].setValue({...newValue})
    } else {
      if (partido.grupo){
        const form = this.fb.group({
          paisA: [partido['paisA']],
          golesA:[''],
          paisB: [partido['paisB']],
          golesB:[''],
          penalesA:[''],
          penalesB:[''],
          ganador:[''],
          perdedor:[''],
          grupo:[partido.grupo]
        }) 
    
        this.agregarValueChanges(form)
        this.partidosCuartos.push(form)
      }
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
              form['controls'].perdedor.setValue(paisB,{emitEvent: false})
            } else {
              form['controls'].ganador.setValue(paisB,{emitEvent: false})
              form['controls'].perdedor.setValue(paisA,{emitEvent: false})
            }
          }
        } else if (parseInt(golesA) > parseInt(golesB)){
          form['controls'].ganador.setValue(paisA,{emitEvent: false})
          form['controls'].perdedor.setValue(paisB,{emitEvent: false})
        } else {
          form['controls'].ganador.setValue(paisB,{emitEvent: false})
          form['controls'].perdedor.setValue(paisA,{emitEvent: false})
        }
      }
      return e
    })
  }

}