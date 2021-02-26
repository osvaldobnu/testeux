import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoleReportComponent } from './stole-report.component';

describe('StoleReportComponent', () => {
  let component: StoleReportComponent;
  let fixture: ComponentFixture<StoleReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoleReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoleReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
