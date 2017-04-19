import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsPokeTileComponent } from './ps-poke-tile.component';

describe('PsPokeTileComponent', () => {
  let component: PsPokeTileComponent;
  let fixture: ComponentFixture<PsPokeTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsPokeTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsPokeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
