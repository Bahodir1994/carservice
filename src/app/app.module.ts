import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './app/body/body.component';
import { SidenavComponent } from './app/sidenav/sidenav.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { ProductsComponent } from './app/products/products.component';
import { StatisticsComponent } from './app/statistics/statistics.component';
import { CoupensComponent } from './app/coupens/coupens.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
