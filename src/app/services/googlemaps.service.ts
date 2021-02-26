import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  constructor(private webReq: WebRequestService) { }

  getLatLogFromAdress(address: string){
    return this.webReq.getLatLonMap(address, 'AIzaSyAQ1QA1kLyPCSV1Y8trNs_7f6Ehg7TycAY');
  }
}
