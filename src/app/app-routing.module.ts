import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QazaqTilPageComponent } from './core/home/language/qazaq-til-page.component';
import { HomePageComponent } from './core/home/home-page/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'qazaqTili', component: QazaqTilPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
