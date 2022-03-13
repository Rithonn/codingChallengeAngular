import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListCardComponent } from './brewery-list-card.component';

describe('BreweryListCardComponent', () => {
  let component: BreweryListCardComponent;
  let fixture: ComponentFixture<BreweryListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreweryListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
