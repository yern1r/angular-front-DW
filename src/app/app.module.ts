import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SignUpModalComponent } from './core/auth/sign-up-modal/sign-up-modal.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { QuizComponent } from './core/home/language/quiz/quiz/quiz.component';
import { QuestionComponent } from './core/home/language/quiz/quiz/questions/question/question.component';
import { ResultComponent } from './core/home/language/quiz/quiz/result/result/result.component';
import { CommonModule } from '@angular/common';
import { MapComponent } from './core/home/map/map-app/map-page.component';
import { MapWithOthersComponent } from './core/home/map/map-with-others/map-with-others.component';
import { HomePageFooterComponent } from './core/home/home-page/footer/home-page-footer/home-page-footer.component';

import { HomePageComponent } from './core/home/home-page/home-page/home-page.component';
import { QazaqTilPageComponent } from './core/home/language/qazaq-til-page.component';
import { CulturePageComponent } from './core/home/culture/culture-page/culture-page.component';
import { DialogModule } from '@angular/cdk/dialog';
import { OpenDialogComponent } from './core/home/culture/open-dialog/open-dialog.component';
import { OpenDialogSandyqComponent } from './core/home/culture/open-dialog-sandyq/open-dialog-sandyq.component';
import { OpenDialogBesikComponent } from './core/home/culture/open-dialog-besik/open-dialog-besik.component';
import { AuthService } from './core/auth/sign-up-modal/services/auth.service';
import { AuthGuard } from './core/home/auth-guard/auth-guard.component';
import { HomePageHeaderComponent } from './core/home/home-page/header/home-page-header/home-page-header.component';



export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SignUpModalComponent,
    QuizComponent,
    QuestionComponent,
    ResultComponent,
    MapWithOthersComponent,
    QazaqTilPageComponent,
    HomePageFooterComponent,
    HomePageHeaderComponent, 
    HomePageComponent,
    MapComponent,
    CulturePageComponent,
    OpenDialogComponent,
    OpenDialogSandyqComponent,
    OpenDialogBesikComponent,
  
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
    // HomePageModule, // Import HomePageModule
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [AuthService, AuthGuard ,
    {
      provide: MatDialogRef,
      useValue: {}
    },],
  bootstrap: [AppComponent],
  //@ts-ignore
  // entryComponents: [SignUpModalComponent], 
})
export class AppModule { }
