import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { QuinelaComponent } from './components/quinela/quinela.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'quinela',component:QuinelaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
