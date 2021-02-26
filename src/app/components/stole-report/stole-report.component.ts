import { Component, OnInit } from '@angular/core';
import { StoleBike } from 'src/app/models/stole-bike';
import { StoleBikeService } from 'src/app/services/stole-bike.service';

@Component({
  selector: 'app-stole-report',
  templateUrl: './stole-report.component.html',
  styleUrls: ['./stole-report.component.css']
})
export class StoleReportComponent implements OnInit {

  total: string = "Total: 0";
  listStole: StoleBike[] = [];
  loading: boolean = false;

  constructor(private stoleBikeService : StoleBikeService) { }

  ngOnInit(): void {
    this.stoleBikeService.currentMessage.subscribe(message => this.total = message);
    this.stoleBikeService.currentListStole.subscribe(listStole => this.listStole = listStole);
    this.stoleBikeService.currentLoading.subscribe(loading => this.loading = loading);
  }
}
