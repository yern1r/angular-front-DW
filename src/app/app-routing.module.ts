import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QazaqTilPageComponent } from './core/home/language/qazaq-til-page.component';
import { HomePageComponent } from './core/home/home-page/home-page/home-page.component';
import { MapComponent } from './core/home/map/map-app/map-page.component';
import { MapWithOthersComponent } from './core/home/map/map-with-others/map-with-others.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'qazaqTili', component: QazaqTilPageComponent},
  {path: 'qazaqTarihMap', component: MapWithOthersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
