import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ShipComponent } from './main/ship/ship.component';
import { EnvironmentComponent } from './main/environment/environment.component';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', component:  DashboardComponent},
  { path: 'ship', component: ShipComponent },
  { path: 'environment', component: EnvironmentComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
