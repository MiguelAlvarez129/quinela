import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { QuinelaComponent } from './components/quinela/quinela.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'index',component:IndexComponent},
  {path:'quiniela',component:QuinelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
