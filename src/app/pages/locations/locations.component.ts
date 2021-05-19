import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable , of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  
  apiLoaded: Observable<boolean>;
  // apiKey: String = "AIzaSyA5Hw58CWFRm_yRz7a-fU9Wd4V_XRmxBmg";



  constructor( httpClient: HttpClient) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyA5Hw58CWFRm_yRz7a-fU9Wd4V_XRmxBmg', 'callback')
        .pipe( map(() => true),
        catchError(() => of(false)),
      );
  }

  ngOnInit(): void {
  }
}
