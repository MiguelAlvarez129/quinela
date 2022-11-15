import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { GetPaisIconService } from 'src/app/services/get-pais-icon.service';
import equipos from '../../../equipos.json'
@Component({
  selector: 'app-primera-fase',
  templateUrl: './primera-fase.component.html',
  styleUrls: ['./primera-fase.component.scss']
})
export class PrimeraFaseComponent implements OnInit {

  constructor(private fb: FormBuilder, private paises : GetPaisIconService) { }
  grupoForm!: FormGroup;
  partidosJugados: any = [];
  puntaje: any = [];
  @Input() grupo : any;
  @Output() resultados = new EventEmitter();

  ngOnInit(): void {
    this.grupoForm = this.fb.group({
      grupo: 'A', 
      partidos: this.fb.array([])
    })
    equipos.map((e) => {
      if (e['Group'] === this.grupo) {
        this.agregarPartido(e) 
        this.partidosJugados.push({[e['HomeTeam']]:0,[e['AwayTeam']]:0,paisB:e['AwayTeam'],paisA:e['HomeTeam'],partidoNum:e['MatchNumber']})
        if (this.puntaje.find(({pais} : any) => pais == e['AwayTeam']) === undefined) this.puntaje.push({pais:e['AwayTeam'],ptos:0,gan:0,emp:0,per:0,gf:0,gc:0,dif:0})
        if (this.puntaje.find(({pais} : any) => pais == e['HomeTeam']) === undefined) this.puntaje.push({pais:e['HomeTeam'],ptos:0,gan:0,emp:0,per:0,gf:0,gc:0,dif:0})
      }
    })
    this.grupoForm.valueChanges.subscribe(() =>  this.resultados.emit({puntaje:this.puntaje,grupo:this.grupo,partidoJugados:this.partidosJugados}))
  }

  get partidos() {
    return this.grupoForm.controls["partidos"] as FormArray;
  }

  getIcono(pais : any){
    return this.paises.getIcono(pais)
  }

  agregarPartido(partido : any){
    const form = this.fb.group({
      partidoNum: partido['MatchNumber'],
      fecha:partido['DateUtc'],
      resultados: this.fb.group({
        paisA: [partido['HomeTeam']],
        golesA:[''],
        paisB: [partido['AwayTeam']],
        golesB:['']
      }),
    }) 
  

    form['controls'].resultados.valueChanges.subscribe((e) => {
     this.actualizarResultados(e)
      return e
    })

    this.partidos.push(form) 
  } 

  actualizarResultados(resultados : object){
    const {paisA,paisB,golesA,golesB} = resultados as any;
    this.partidosJugados = this.partidosJugados.map((e : any) => {
      const keys = Object.keys(e)
      if (keys.includes(paisA) && keys.includes(paisB)) {
        e[paisA] = golesA
        e[paisB] = golesB
      }
      return e
    })

    this.puntaje = this.puntaje.map((e : any) =>{
      const filter = this.partidosJugados.reduce((acc: any,a : any) => {
        const keys = Object.keys(a)
        const otroPais = keys.filter((f:any) => f !== e.pais)[0]
        
        if (keys.includes(e.pais)){
          if (acc.pais === undefined){
            acc.pais = e.pais
            acc.gf =  parseInt(a[e.pais])
            acc.gc = parseInt(a[otroPais])
            acc.gan = 0
            acc.per = 0
            acc.emp = 0
          } else {
            acc.gf +=  parseInt(a[e.pais])
            acc.gc +=  parseInt(a[otroPais])
          }

          if (parseInt(a[e.pais]) > parseInt(a[otroPais])){
            acc.gan += 1
          } else if (a[e.pais] < a[otroPais]){
            acc.per += 1
          } else if(parseInt(a[otroPais]) === parseInt(a[e.pais]) && a[otroPais] != '' && a[e.pais] != ''){
            acc.emp += 1
          }
        }
        acc.dif = - acc.gc + acc.gf
        acc.ptos = acc.gan * 3 + acc.emp * 1 
        return acc
      },{})

      return {...e,...filter}
    })

  
  }

  
}
