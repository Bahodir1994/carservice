import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { CdkMenuModule } from "@angular/cdk/menu";
import { OverlayModule } from "@angular/cdk/overlay";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginator} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatChipsModule} from "@angular/material/chips";
import {MatIcon} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
    HttpClientModule,
    MatPaginator,
    MatCardModule,
    MatButtonModule,
    MatProgressBar,
    MatChipsModule,
    MatIcon
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
