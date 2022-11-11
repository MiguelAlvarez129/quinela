import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.scss']
})
export class TablaResultadosComponent implements OnInit {

  constructor() { }
  @Input() tabla : any;
  dataSource! : any;
  displayedColumns: string[] = ['pais', 'ptos', 'gan','per','emp', 'gf', 'gc','dif'];
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.tabla)
    
  }


  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new MatTableDataSource(changes['tabla'].currentValue)
}

  notANumber(value : any){
    return isNaN(value) ? 0 : parseInt(value)
  }

}
