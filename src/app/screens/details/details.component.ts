import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { StoleBike } from 'src/app/models/stole-bike';
import { GooglemapsService } from 'src/app/services/googlemaps.service';
import { StoleBikeService } from 'src/app/services/stole-bike.service';


import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

declare var google: any;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  selectedListId: string = '';
  stole: StoleBike = new StoleBike();

  options: any;
  overlays: any[] = [];

  lat: string = '';
  lng: string = '';

  constructor(private stoleBikeService: StoleBikeService, private route: ActivatedRoute, private googlemaps: GooglemapsService) { }

  ngOnInit(): void {
    registerLocaleData(localeDe);

    this.route.params.subscribe( 
      (params: Params) => {

        if (params.stoleId) {
          this.selectedListId = params.stoleId;
          this.stoleBikeService.getSpecificStole(this.selectedListId).subscribe(async(stole: any) => {
            this.stole = stole;

            this.options = {
              center: { lat: Number(params.lat), lng: Number(params.lng) },
              zoom: 12
            };
          })
        }
      }
    )

    
  }
}
