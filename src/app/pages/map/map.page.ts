import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  mapShows: boolean = false;
  lat;
  lng;

  constructor() { }

  ngOnInit() {
    this.showCoords();
  }

  showCoords(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        //console.log(`Latitude: ${position.coords.latitude} |  Longitude: ${position.coords.longitude}`);
        });
    } else{
        alert("Sorry, your browser does not support HTML5 geolocation.");
    }
}

toggleImage() {
  this.mapShows = !this.mapShows;
}

//   getlocation(){ 
//     if(navigator.geolocation){ 
//         navigator.geolocation.getCurrentPosition(this.showLoc); 
//     } 
// } 
// showLoc(position) {
//   if(position) {
//     this.lat = `Latitude: ${position.coords.latitude}`;
//     this.lng = `Longitude: ${position.coords.longitude}`;
//   console.log(`Latitude: ${position.coords.latitude} |  Longitude: ${position.coords.longitude}`);

// } else{
// alert("Sorry, your browser does not support HTML5 geolocation.");
// }

  
// errHand(err) { 
//     switch(err.code) { 
//         case err.PERMISSION_DENIED: 
//             console.log("The application doesn't have the permission"  +  
//                        "to make use of location services" );
//             break; 
//         case err.POSITION_UNAVAILABLE: 
//             console.log("The location of the device is uncertain" );
//             break; 
//         case err.TIMEOUT: 
//         console.log("The request to get user location timed out" );
//             break; 
//         case err.UNKNOWN_ERROR: 
//         console.log("Time to fetch location information exceeded"+ 
//               "the maximum timeout interval"); 
//             break; 
//     } 
// }

//}
} //class
