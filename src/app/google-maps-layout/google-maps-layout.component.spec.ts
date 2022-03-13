import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapsLayoutComponent } from './google-maps-layout.component';

describe('GoogleMapsLayoutComponent', () => {
  let component: GoogleMapsLayoutComponent;
  let fixture: ComponentFixture<GoogleMapsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleMapsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
