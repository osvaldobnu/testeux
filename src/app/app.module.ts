import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TableModule } from 'primeng/table';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './screens/index/index.component';
import { FilterStolenComponent } from './components/filter-stolen/filter-stolen.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { StoleReportComponent } from './components/stole-report/stole-report.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HttpClientModule } from '@angular/common/http';
import { StoleBikeService } from './services/stole-bike.service';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { DetailsComponent } from './screens/details/details.component';

import {GMapModule} from 'primeng/gmap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    FilterStolenComponent,
    StoleReportComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    BrowserAnimationsModule,
    ButtonModule,
    ProgressSpinnerModule,
    HttpClientModule,
    CardModule,
    PaginatorModule,
    GMapModule
  ],
  providers: [StoleBikeService, {provide: LOCALE_ID, useValue: 'de-DE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
