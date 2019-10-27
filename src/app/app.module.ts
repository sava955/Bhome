import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { ChartsModule } from 'ng2-charts';
import { SidebarModule } from 'ng-sidebar';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './homepage/home/home.component';
import { FeaturesComponent } from './homepage/features/features.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FaqComponent } from './homepage/faq/faq.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { FooterSmComponent } from './footer-sm/footer-sm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HomeComponent,
    FeaturesComponent,
    DashboardComponent,
    FaqComponent,
    FooterComponent,
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    SideNavComponent,
    FooterSmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    }),
    ChartsModule,
    SidebarModule.forRoot(),
    BrowserAnimationsModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
