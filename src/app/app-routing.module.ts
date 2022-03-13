import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoreInfoComponent} from "./more-info/more-info.component";
import {AppHomeComponent} from "./app-home/app-home.component";


const routes: Routes = [
  {path: '', component: AppHomeComponent},
  {path: 'moreInfo/:id', component: MoreInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MoreInfoComponent, AppHomeComponent];
