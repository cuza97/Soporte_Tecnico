import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcomsComponent } from './breadcoms.component';

describe('BreadcomsComponent', () => {
  let component: BreadcomsComponent;
  let fixture: ComponentFixture<BreadcomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
