import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quinela',
  templateUrl: './quinela.component.html',
  styleUrls: ['./quinela.component.scss']
})
export class QuinelaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  octavos : any = [];
  cuartos : any = [];
  semifinales: any =[];
  finales : any = [];
  primeraFase: any =[];
  tercerLugar: any = [];
  semifinalesPerdedores: any = [];
  datosPrimeraFase : any =[ { "puntaje": [ { "pais": "Saudi Arabia", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Argentina", "ptos": 1, "gan": 0, "emp": 1, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Poland", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 6, "gc": 5, "dif": 1 }, { "pais": "Mexico", "ptos": 9, "gan": 3, "emp": 0, "per": 0, "gf": 6, "gc": 3, "dif": 3 } ], "grupo": "Group C" }, { "puntaje": [ { "pais": "Tunisia", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Denmark", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 5, "gc": 5, "dif": 0 }, { "pais": "Australia", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 5, "gc": 5, "dif": 0 }, { "pais": "France", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 6, "gc": 4, "dif": 2 } ], "grupo": "Group D" }, { "puntaje": [ { "pais": "Japan", "ptos": 7, "gan": 2, "emp": 1, "per": 0, "gf": 6, "gc": 4, "dif": 2 }, { "pais": "Germany", "ptos": 2, "gan": 0, "emp": 2, "per": 1, "gf": 3, "gc": 4, "dif": -1 }, { "pais": "Costa Rica", "ptos": 1, "gan": 0, "emp": 1, "per": 2, "gf": 3, "gc": 5, "dif": -2 }, { "pais": "Spain", "ptos": 5, "gan": 1, "emp": 2, "per": 0, "gf": 5, "gc": 4, "dif": 1 } ], "grupo": "Group E" }, { "puntaje": [ { "pais": "Croatia", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 5, "gc": 5, "dif": 0 }, { "pais": "Morocco", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "Canada", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 7, "gc": 6, "dif": 1 }, { "pais": "Belgium", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 5, "gc": 5, "dif": 0 } ], "grupo": "Group F" }, { "puntaje": [ { "pais": "Cameroon", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 7, "gc": 5, "dif": 2 }, { "pais": "Switzerland", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 7, "dif": -2 }, { "pais": "Serbia", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 7, "dif": -2 }, { "pais": "Brazil", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 8, "gc": 6, "dif": 2 } ], "grupo": "Group G" }, { "puntaje": [ { "pais": "Korea Republic", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 8, "gc": 4, "dif": 4 }, { "pais": "Uruguay", "ptos": 1, "gan": 0, "emp": 1, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Ghana", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 7, "gc": 9, "dif": -2 }, { "pais": "Portugal", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 7, "gc": 7, "dif": 0 } ], "grupo": "Group H" }, { "puntaje": [ { "pais": "Iran", "ptos": 9, "gan": 3, "emp": 0, "per": 0, "gf": 6, "gc": 3, "dif": 3 }, { "pais": "England", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "Wales", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "USA", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 5, "dif": -1 } ], "grupo": "Group B" }, { "puntaje": [ { "pais": "Ecuador", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 5, "gc": 4, "dif": 1 }, { "pais": "Qatar", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 5, "dif": -1 }, { "pais": "Netherlands", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "Senegal", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 6, "gc": 5, "dif": 1 } ], "grupo": "Group A" } ]
  ngOnInit(): void {
   
  }

  addResultado(event : any){
    const index = this.primeraFase.findIndex((e : any)=> e.grupo === event.grupo);
    if (index === -1){
      this.primeraFase = [{...event},...this.primeraFase]
    } else {
      this.primeraFase = [...this.primeraFase.slice(0,index),{...this.primeraFase[index],puntaje:event.puntaje},...this.primeraFase.slice(index+1)]
    }
  }

  addOctavos(event : any){
    this.octavos = [...event.octavos]
  }

  addCuartos(event : any){ 
    this.cuartos = [...event.cuartos]
  }

  addSemifinales(event : any){
    this.semifinales = [...event.cuartos]
    this.semifinalesPerdedores = event.cuartos.map((e : any) =>{
      const {perdedor} = e;
      return {...e,ganador:perdedor,perdedor:''}
    })
    
  }
  addFinales(event:any){
    console.log(event.cuartos,'final!')
    this.finales = [...event.cuartos]
  }

  addTercerLugar(event:any){
    this.tercerLugar = [...event.cuartos]
  }

  onSubmit(){
    const bodyPrimeraFase = {
      primeraFase : [...this.primeraFase]
    }

    const bodyOtrasFases = {
      octavos: [...this.octavos],
      cuartos: [...this.cuartos],
      semifinales: [...this.semifinales],
      finales:[...this.finales],
      tercerLugar:[...this.tercerLugar]
    }

    console.log(bodyOtrasFases)
    console.log(bodyPrimeraFase)
  }
  datosOctavos = [ { "puntaje": [ { "pais": "Saudi Arabia", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Argentina", "ptos": 1, "gan": 0, "emp": 1, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Poland", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 6, "gc": 5, "dif": 1 }, { "pais": "Mexico", "ptos": 9, "gan": 3, "emp": 0, "per": 0, "gf": 6, "gc": 3, "dif": 3 } ], "grupo": "Group C" }, { "puntaje": [ { "pais": "Tunisia", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Denmark", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 5, "gc": 5, "dif": 0 }, { "pais": "Australia", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 5, "gc": 5, "dif": 0 }, { "pais": "France", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 6, "gc": 4, "dif": 2 } ], "grupo": "Group D" }, { "puntaje": [ { "pais": "Japan", "ptos": 7, "gan": 2, "emp": 1, "per": 0, "gf": 6, "gc": 4, "dif": 2 }, { "pais": "Germany", "ptos": 2, "gan": 0, "emp": 2, "per": 1, "gf": 3, "gc": 4, "dif": -1 }, { "pais": "Costa Rica", "ptos": 1, "gan": 0, "emp": 1, "per": 2, "gf": 3, "gc": 5, "dif": -2 }, { "pais": "Spain", "ptos": 5, "gan": 1, "emp": 2, "per": 0, "gf": 5, "gc": 4, "dif": 1 } ], "grupo": "Group E" }, { "puntaje": [ { "pais": "Croatia", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 5, "gc": 5, "dif": 0 }, { "pais": "Morocco", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "Canada", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 7, "gc": 6, "dif": 1 }, { "pais": "Belgium", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 5, "gc": 5, "dif": 0 } ], "grupo": "Group F" }, { "puntaje": [ { "pais": "Cameroon", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 7, "gc": 5, "dif": 2 }, { "pais": "Switzerland", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 7, "dif": -2 }, { "pais": "Serbia", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 7, "dif": -2 }, { "pais": "Brazil", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 8, "gc": 6, "dif": 2 } ], "grupo": "Group G" }, { "puntaje": [ { "pais": "Korea Republic", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 8, "gc": 4, "dif": 4 }, { "pais": "Uruguay", "ptos": 1, "gan": 0, "emp": 1, "per": 2, "gf": 4, "gc": 6, "dif": -2 }, { "pais": "Ghana", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 7, "gc": 9, "dif": -2 }, { "pais": "Portugal", "ptos": 4, "gan": 1, "emp": 1, "per": 1, "gf": 7, "gc": 7, "dif": 0 } ], "grupo": "Group H" }, { "puntaje": [ { "pais": "Iran", "ptos": 9, "gan": 3, "emp": 0, "per": 0, "gf": 6, "gc": 3, "dif": 3 }, { "pais": "England", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "Wales", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "USA", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 5, "dif": -1 } ], "grupo": "Group B" }, { "puntaje": [ { "pais": "Ecuador", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 5, "gc": 4, "dif": 1 }, { "pais": "Qatar", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 4, "gc": 5, "dif": -1 }, { "pais": "Netherlands", "ptos": 3, "gan": 1, "emp": 0, "per": 2, "gf": 5, "gc": 6, "dif": -1 }, { "pais": "Senegal", "ptos": 6, "gan": 2, "emp": 0, "per": 1, "gf": 6, "gc": 5, "dif": 1 } ], "grupo": "Group A" } ]
  datosSemifinales = [
    {
        "paisA": "Iran",
        "golesA": "5",
        "paisB": "Mexico",
        "golesB": "1",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Iran",
        "grupo": "AB1-CD1"
    },
    {
        "paisA": "England",
        "golesA": "2",
        "paisB": "France",
        "golesB": "52",
        "penalesA": "",
        "penalesB": "",
        "ganador": "France",
        "grupo": "AB2-CD2"
    },
    {
        "paisA": "Japan",
        "golesA": "2",
        "paisB": "Ghana",
        "golesB": "1",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Japan",
        "grupo": "EF1-GH1"
    },
    {
        "paisA": "Spain",
        "golesA": "5",
        "paisB": "Korea Republic",
        "golesB": "1",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Spain",
        "grupo": "EF2-GH2"
    }
]
  datosCuartos = [
    {
        "paisA": "Iran",
        "golesA": "4",
        "paisB": "Ecuador",
        "golesB": "1",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Iran",
        "grupo": "AB1"
    },
    {
        "paisA": "Senegal",
        "golesA": "2",
        "paisB": "England",
        "golesB": "5",
        "penalesA": "",
        "penalesB": "",
        "ganador": "England",
        "grupo": "AB2"
    },
    {
        "paisA": "Mexico",
        "golesA": "2",
        "paisB": "Denmark",
        "golesB": "1",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Mexico",
        "grupo": "CD1"
    },
    {
        "paisA": "France",
        "golesA": "5",
        "paisB": "Poland",
        "golesB": "2",
        "penalesA": "",
        "penalesB": "",
        "ganador": "France",
        "grupo": "CD2"
    },
    {
        "paisA": "Japan",
        "golesA": "4",
        "paisB": "Canada",
        "golesB": "2",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Japan",
        "grupo": "EF1"
    },
    {
        "paisA": "Belgium",
        "golesA": "1",
        "paisB": "Spain",
        "golesB": "2",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Spain",
        "grupo": "EF2"
    },
    {
        "paisA": "Brazil",
        "golesA": "1",
        "paisB": "Ghana",
        "golesB": "4",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Ghana",
        "grupo": "GH1"
    },
    {
        "paisA": "Korea Republic",
        "golesA": "2",
        "paisB": "Cameroon",
        "golesB": "1",
        "penalesA": "",
        "penalesB": "",
        "ganador": "Korea Republic",
        "grupo": "GH2"
    }
]
}
