import { Component, NgModule, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5Hw58CWFRm_yRz7a-fU9Wd4V_XRmxBmg'
    })
  ],
})
export class LocationsComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit(): void {
  }
}
