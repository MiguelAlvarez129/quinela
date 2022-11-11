import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import equipos from '../../../equipos.json'
@Component({
  selector: 'app-quinela',
  templateUrl: './quinela.component.html',
  styleUrls: ['./quinela.component.scss']
})
export class QuinelaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  grupo!: FormGroup;
  partidosJugados: any = [];
  puntaje: any = {};

  ngOnInit(): void {
    this.grupo = this.fb.group({
      grupo: 'A',
      partidos: this.fb.array([])
    })
    equipos.map((e) => { 
      if (e['Group'] === 'Group A') {
        this.agregarPartido(e)
        if (this.partidosJugados[e['AwayTeam']] === undefined){
          this.partidosJugados.push({[e['HomeTeam']]:0,[e['AwayTeam']]:0})
        }
        if (this.puntaje[e['AwayTeam']] === undefined) this.puntaje[e['AwayTeam']] 
        = {ptos:0,gan:0,emp:0,per:0,gf:0,gc:0,dif:0}
        if (this.puntaje[e['HomeTeam']] === undefined) this.puntaje[e['HomeTeam']] = {ptos:0,gan:0,emp:0,per:0,gf:0,gc:0,dif:0}

      }
    })

  }

  get partidos() {
    return this.grupo.controls["partidos"] as FormArray;
  }



  agregarPartido(partido : any){
    const form = this.fb.group({
      partidoNum: partido['MatchNumber'],
      fecha:partido['DateUtc'],
      resultados: this.fb.group({
        paisA: [partido['HomeTeam']],
        golesA:[0],
        paisB: [partido['AwayTeam']],
        golesB:[0]
      }),
    }) 
  

    form['controls'].resultados.valueChanges.subscribe((e) => {
     this.actualizarResultados(e)
     console.log(e)
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

    // this.puntaje = this.partidosJugados.reduce((acc : any, e : any)=>{
    //   const keys = Object.keys(e)
    //   for (let key of keys){
    //     acc[key] = 
    //   }
    // if (golesA === golesB){
    //   this.puntaje[paisA].emp += 1;
    //   this.puntaje[paisA].emp += 1;
    // } else if (golesA > golesB){
    //   this.puntaje[paisA].gan += 1;
    //   this.puntaje[paisA].per -= 1;
    //   this.puntaje[paisB].gan -= 1;
    //   this.puntaje[paisB].per += 1;
    // } else {
    //   this.puntaje[paisB].gan += 1;
    //   this.puntaje[paisB].per -= 1;
    //   this.puntaje[paisA].gan -= 1;
    //   this.puntaje[paisA].per += 1;
    // } 
    //   return acc
    // },{})
    // this.partidosJugados[paisA + '-' + paisB][paisA] = golesA
    // this.partidosJugados[paisA + '-' + paisB][paisB] = golesB




    // if (golesA === golesB){
    //   this.puntaje[paisA].emp += 1;
    //   this.puntaje[paisA].emp += 1;
    // } else if (golesA > golesB){
    //   this.puntaje[paisA].gan += 1;
    //   this.puntaje[paisA].per -= 1;
    //   this.puntaje[paisB].gan -= 1;
    //   this.puntaje[paisB].per += 1;
    // } else {
    //   this.puntaje[paisB].gan += 1;
    //   this.puntaje[paisB].per -= 1;
    //   this.puntaje[paisA].gan -= 1;
    //   this.puntaje[paisA].per += 1;
    // } 

  }
}
