import { NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
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
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {DashboardDataService} from "./dashboard/dashboard-data-service";
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatDividerModule} from "@angular/material/divider";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    HeaderComponent,
    LoginComponent
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
    MatIcon,
    MatInputModule, MatIconModule, MatRadioModule, MatTableModule, MatListModule, MatDividerModule,
    ReactiveFormsModule, MatFormFieldModule, MatSelectModule, FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    DashboardDataService,
    DashboardComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
