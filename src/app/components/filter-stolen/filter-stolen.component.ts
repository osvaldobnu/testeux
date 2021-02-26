import { Component, OnInit } from '@angular/core';
import { StoleBike } from 'src/app/models/stole-bike';
import { StoleBikeService } from 'src/app/services/stole-bike.service';

import { GooglemapsService } from 'src/app/services/googlemaps.service';

@Component({
  selector: 'app-filter-stolen',
  templateUrl: './filter-stolen.component.html',
  styleUrls: ['./filter-stolen.component.css']
})
export class FilterStolenComponent implements OnInit {

  listStole: StoleBike[] = [];
  loading: boolean = false;

  lat: string = '';
  lng: string = '';

  constructor(private stoleBikeService: StoleBikeService, private googlemaps: GooglemapsService) {
  }

  dateStart: Date = new Date();
  dateEnd: Date = new Date();
  description: string = '';

  ngOnInit(): void {
    //this.getListBikeStoles();
  }

  searchBikeStoles() {
    this.listStole = [];
    this.setCountStoles("");
    let listStoleBody: StoleBike[] = [];

    this.stoleBikeService.changeListStole(this.listStole);

    this.loading = true;
    this.stoleBikeService.changeLoadingState(this.loading);

    try {

      this.stoleBikeService.getListStolesWithParams(
        (this.dateStart == null ? '' : this.dateStart.getTime().toString()),
        (this.dateEnd == null ? '' : this.dateEnd.getTime().toString()),
        this.description).
        subscribe((list: any,) => {
          Object.keys(list.incidents).map(function (key) {
            listStoleBody.push(list.incidents[key]);
          })

          this.listStole = listStoleBody;

          this.listStole.forEach(stole => {
            this.googlemaps.getLatLogFromAdress(stole.address).subscribe((mapJson: any) => {

              let parser = new DOMParser();
              let xml = parser.parseFromString(mapJson, "text/xml");
              let x = xml.getElementsByTagName("GeocodeResponse")[0];
              x.childNodes.forEach((item) => {
                if (item.nodeName == 'result') {
                  item.childNodes.forEach((itemChild) => {
                    if (itemChild.nodeName == 'geometry') {
                      itemChild.childNodes.forEach((itemGeo) => {
                        itemGeo.childNodes.forEach((location) => {
                          if (location.nodeName == 'lat') {
                            if (location.textContent != null) {
                              this.lat = location.textContent;
                              stole.lat = location.textContent;
                            }
                          } else if (location.nodeName == 'lng') {
                            if (location.textContent != null) {
                              this.lng = location.textContent;
                              stole.lng = location.textContent;
                            }
                          }
                        })
                      })
                    }
                  })
                }
              });
            })
          });

          this.stoleBikeService.changeListStole(this.listStole);
          this.setCountStoles(this.listStole.length.toString());
          this.loading = false;
          this.stoleBikeService.changeLoadingState(this.loading);
        })
    } catch (error) {
      this.loading = false;
      this.stoleBikeService.changeLoadingState(this.loading);
      this.setCountStoles('0');
      this.stoleBikeService.changeMessage("Ooops, something went wrong");
    }
  }

  /*getListBikeStoles() {
    this.listStole = [];
    this.setCountStoles("");
    let listStoleBody: StoleBike[] = [];

    this.stoleBikeService.changeListStole(this.listStole);

    this.loading = true;
    this.stoleBikeService.changeLoadingState(this.loading);

    try {

      this.stoleBikeService.getListStoles().
        subscribe((list: any,) => {
          Object.keys(list.incidents).map(function (key) {
            listStoleBody.push(list.incidents[key]);
          })

          this.listStole = listStoleBody;
          this.stoleBikeService.changeListStole(this.listStole);
          this.setCountStoles(this.listStole.length.toString());
          this.loading = false;
          this.stoleBikeService.changeLoadingState(this.loading);
        })
    } catch (error) {
      this.loading = false;
      this.stoleBikeService.changeLoadingState(this.loading);
      this.setCountStoles('0');
      this.stoleBikeService.changeMessage("Ooops, something went wrong");
    }
  }
  */
  setCountStoles(countStoles: string) {
    this.stoleBikeService.changeMessage("Total: " + countStoles);
  }
}
