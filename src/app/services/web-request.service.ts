import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;
  readonly ROOT_URL_MAPS;

  constructor(private http: HttpClient) {
    this.ROOT_URL = "https://bikewise.org:443/api";
    this.ROOT_URL_MAPS = 'https://maps.googleapis.com/maps/api/geocode/xml';
  }

  get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  getLatLonMap(adress: string, apikey: string) {
    return this.http.get(`${this.ROOT_URL_MAPS}?address=${adress}&key=${apikey}`, {responseType: 'text'});
  }

  getSpecific(uri: string, stoleId: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}/${stoleId}`);
  }

  getWithParams(uri: string, dateStart: string, dateEnd: string, description: string) {

    let jsonParams = this.montaJson(dateStart, dateEnd, description);

    return this.http.get(`${this.ROOT_URL}/${uri}`,
      {
        params: jsonParams
      });
  }

  montaJson(dateStart: string, dateEnd: string, description: string) {

    let jsonParams = {

    };

    if (dateStart == '' && dateEnd == '') {
      jsonParams = {
        query: description
      };
    } else if (dateStart != '' && dateEnd != '' && description != '') {
      jsonParams = {
        occurred_after: dateStart.slice(0, 10),
        occurred_before: dateEnd.slice(0, 10),
        query: description
      };
    } else if (dateStart != '' && dateEnd != '') {
      jsonParams = {
        occurred_after: dateStart.slice(0, 10),
        occurred_before: dateEnd.slice(0, 10),
      };
    } else if (description != '') {
      jsonParams = {
        query: description
      };
    }

    return jsonParams;
  }
}
