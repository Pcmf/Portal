import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {WebcamModule} from 'ngx-webcam';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DocsComponent } from './docs/docs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuardService } from './auth-guard.service';
import { DataService } from './data.service';
import { HttpModule } from '@angular/http';
import { ShowDocComponent } from './show-doc/show-doc.component';
import { InfoComponent } from './info/info.component';
import { ChangeComponent } from './change/change.component';
import { ComprovativosComponent } from './comprovativos/comprovativos.component';
import { ShowComprovativoComponent } from './show-comprovativo/show-comprovativo.component';
import { HelpComponent } from './help/help.component';
import { CaptureComponent } from './capture/capture.component';
import { CapCompComponent } from './cap-comp/cap-comp.component';
import { IntroComponent } from './intro/intro.component';
import { FormComponent } from './form/form.component';
import { Form2Component } from './form2/form2.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    DocsComponent,
    NavbarComponent,
    ShowDocComponent,
    InfoComponent,
    ChangeComponent,
    ComprovativosComponent,
    ShowComprovativoComponent,
    HelpComponent,
    CaptureComponent,
    CapCompComponent,
    IntroComponent,
    FormComponent,
    Form2Component,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    WebcamModule,
    RouterModule.forRoot([
      {path: 'intro' , component: IntroComponent, canActivate: [AuthGuardService]},
      {path: 'form' , component: FormComponent, canActivate: [AuthGuardService]},
      {path: 'form2' , component: Form2Component, canActivate: [AuthGuardService]},
      {path: 'main' , component: MainComponent, canActivate: [AuthGuardService]},
      {path: 'info' , component: InfoComponent, canActivate: [AuthGuardService]},
      {path: 'login' , component: LoginComponent },
      {path: 'show' , component: ShowDocComponent, canActivate: [AuthGuardService] },
      {path: 'capture' , component: CaptureComponent, canActivate: [AuthGuardService] },
      {path: 'docs' , component: DocsComponent, canActivate: [AuthGuardService]},
      {path: 'comp' , component: ComprovativosComponent, canActivate: [AuthGuardService]},
      {path: 'capcomp' , component: CapCompComponent, canActivate: [AuthGuardService] },
      {path: 'showcomp' , component: ShowComprovativoComponent, canActivate: [AuthGuardService]},
      {path: 'change' , component: ChangeComponent, canActivate: [AuthGuardService]},
      {path: 'faq' , component: HelpComponent, canActivate: [AuthGuardService]},
      {path: '**', component: MainComponent, canActivate: [AuthGuardService]},
      {path: '**', component: LoginComponent }
    ])
  ],
 // providers: [DataService, AuthGuardService, {provide: APP_BASE_HREF, useValue: '/sisleads/GestLifesClient/'}],
  providers: [DataService, AuthGuardService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
