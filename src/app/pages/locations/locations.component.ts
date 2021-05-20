import { Component, OnInit } from '@angular/core';
import {MapGeocoder} from '@angular/google-maps';
import { GoogleMapsModule } from '@angular/google-maps';


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
  //  map: google.maps.Map;

  // apiKey: String = "AIzaSyCO864sej09c-U8qpUGLqZ4XO84fLT5wFQ";
//  lat: Number = 28.5355;
//  lng: Number = 77.3910;


  constructor( httpClient: HttpClient, geocoder: MapGeocoder) {
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyCO864sej09c-U8qpUGLqZ4XO84fLT5wFQ', 'callback')
        .pipe( map(() => true),
        catchError(() => of(false)),
      );

      // geocoder.geocode({
      //   address: '1600 Amphitheatre Parkway, Mountain View, CA'
      // }).subscribe(({results}) => {
      //   console.log(results);
      // });
  }

  myLatLng: google.maps.LatLngLiteral = {lat: 40.7482341012123,lng: -73.88000853777567};
  mapOptions = { 
    center: this.myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {draggable: true};
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: google.maps.MapMouseEvent) {
    this.markerPositions.push(event.latLng.toJSON());
  }

  // center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  // zoom = 4;

  // moveMap(event: google.maps.MapMouseEvent) {
  //   this.center = (event.latLng.toJSON());
  // }

  // move(event: google.maps.MapMouseEvent) {
  //   this.display = event.latLng.toJSON();
  // }

  ngOnInit(): void {
    if(!navigator.geolocation){
      console.log('location is not support');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(`lat: ${position.coords.altitude}, lng: ${position.coords.longitude}`);
    });
    this.locatePosition();
  }

  locatePosition(){
    let lat = 0;
    let lng = 0;
    let id = navigator.geolocation.watchPosition((position) => {
      console.log(`lat: ${position.coords.altitude}, lng: ${position.coords.longitude}`);
    }, (error) => {
      console.log(error);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    });
  }

}
