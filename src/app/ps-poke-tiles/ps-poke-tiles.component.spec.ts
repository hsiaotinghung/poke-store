import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsPokeTilesComponent } from './ps-poke-tiles.component';

describe('PsPokeTilesComponent', () => {
  let component: PsPokeTilesComponent;
  let fixture: ComponentFixture<PsPokeTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsPokeTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsPokeTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
