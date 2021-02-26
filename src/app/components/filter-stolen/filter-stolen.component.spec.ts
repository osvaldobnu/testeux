import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterStolenComponent } from './filter-stolen.component';

describe('FilterStolenComponent', () => {
  let component: FilterStolenComponent;
  let fixture: ComponentFixture<FilterStolenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterStolenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterStolenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
