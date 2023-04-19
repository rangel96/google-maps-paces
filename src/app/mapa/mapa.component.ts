import {Component, ViewChild} from '@angular/core';
import {Options} from 'ngx-google-places-autocomplete/objects/options/options';
import {GooglePlaceDirective} from 'ngx-google-places-autocomplete';
import {Address} from 'ngx-google-places-autocomplete/objects/address';
import {AgmMarker} from '@agm/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent {

  @ViewChild('placesRef') placesRef: GooglePlaceDirective | undefined;

  lat = 19.4326296;
  lng = -99.1331785;
  zoom = 16;
  disableUI = true;

  options: Options | any = {
    fields: [],
    strictBounds: false,
    types: [],
    componentRestrictions: {country: 'MX'}
  };

  handleAddressChange(address: Address): void {
    const {geometry: {location: {lat, lng}}} = address;

    this.lat = lat();
    this.lng = lng();
  }

  addPlace($event: AgmMarker): void {
    const {title, longitude, infoWindow, label} = $event;
    console.log({
      title,
      longitude,
      infoWindow,
      label
    });
  }

  selectPlace($event: google.maps.MouseEvent | google.maps.IconMouseEvent): void {
    console.log($event);
  }

}
