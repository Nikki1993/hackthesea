import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { DrawerComponent } from './drawer/drawer.component';

import { IvService } from './iv.service';
import { FooterComponent } from './footer/footer.component';
import { ShipComponent } from './main/ship/ship.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { EnvironmentComponent } from './main/environment/environment.component';
import { GaugesComponent } from './main/dashboard/gauges/gauges.component';
import { ShipOverviewComponent } from './main/dashboard/ship-overview/ship-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    DrawerComponent,
    FooterComponent,
    ShipComponent,
    DashboardComponent,
    EnvironmentComponent,
    GaugesComponent,
    ShipOverviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [IvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
