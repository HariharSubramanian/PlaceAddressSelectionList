import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';

const routes: Routes = [
  { path: '', component: LocationSelectorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
