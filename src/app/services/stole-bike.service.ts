import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StoleBike } from '../models/stole-bike';
import { WebRequestService } from './web-request.service';
//import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StoleBikeService {

  //listStole: StoleBike[] = [];
  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  private messageSourceError = new BehaviorSubject<string>("");
  currentMessageError = this.messageSourceError.asObservable();

  private listStole = new BehaviorSubject<StoleBike[]>([]);
  currentListStole = this.listStole.asObservable();

  private loading = new BehaviorSubject<boolean>(false);
  currentLoading = this.loading.asObservable();

  constructor(private webReqService: WebRequestService) { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeMessageError(messageError: string) {
    this.messageSourceError.next(messageError);
  }

  changeListStole(pListStole: StoleBike[]) {
    this.listStole.next(pListStole);
  }

  changeLoadingState(load: boolean) {
    this.loading.next(load);
  }

  getListStoles() {
    return this.webReqService.get("v2/incidents");
  }

  getSpecificStole(stoleId: string){
    return this.webReqService.getSpecific("v2/incidents/", stoleId);
  }

  getListStolesWithParams(dateStart: string, dateEnd: string, description: string) {
    return this.webReqService.getWithParams("v2/incidents", dateStart, dateEnd, description);
  }
}
