import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { getCarsResolver } from './shared/resolvers/get-cars.resolver';
import { ListComponent } from './features/list/list.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
