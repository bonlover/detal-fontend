import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GoogleMapsModule} from '@angular/google-maps';

import { LocationsComponent } from './locations.component';

@NgModule({
  declarations: [
    LocationsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsModule
  ]
})
export class LocationsModule { }
