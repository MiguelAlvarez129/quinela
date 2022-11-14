import { Injectable } from '@angular/core';
import paises from  '../../paises.json'
@Injectable({
  providedIn: 'root'
})
export class GetPaisIconService {

  constructor() { }


  getIcono(pais : string){
    const icono = paises.filter((e) => pais === e.pais)[0]
    return icono ? icono.icono : null
  }
}
