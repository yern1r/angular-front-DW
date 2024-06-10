import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QazaqTilPageComponent } from './core/home/language/qazaq-til-page.component';
import { HomePageComponent } from './core/home/home-page/home-page/home-page.component';
import { MapComponent } from './core/home/map/map-app/map-page.component';
import { MapWithOthersComponent } from './core/home/map/map-with-others/map-with-others.component';
import { CulturePageComponent } from './core/home/culture/culture-page/culture-page.component';

import { SignUpModalComponent } from './core/auth/sign-up-modal/sign-up-modal.component';
import { AuthGuard } from './core/home/auth-guard/auth-guard.component';


const routes: Routes = [
  // {path: '', component: HomePageComponent},
  {path: 'qazaqTili', component: QazaqTilPageComponent},
  {path: 'qazaqTarihMap', component: MapWithOthersComponent},
  {path: 'qazaqDastur', component: CulturePageComponent},
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignUpModalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
