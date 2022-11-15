import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/index/index.component';
import { QuinelaComponent } from './components/quinela/quinela.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { PrimeraFaseComponent } from './components/primera-fase/primera-fase.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { TablaResultadosComponent } from './components/tabla-resultados/tabla-resultados.component';
import { OctavosComponent } from './components/octavos/octavos.component';
import { CuartosComponent } from './components/cuartos/cuartos.component';
import { LoginComponent } from './components/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SemifinalesComponent } from './components/semifinales/semifinales.component';
import { FinalesComponent } from './components/finales/finales.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    QuinelaComponent,
    PrimeraFaseComponent,
    TablaResultadosComponent,
    OctavosComponent,
    CuartosComponent,
    LoginComponent,
    SemifinalesComponent,
    FinalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
