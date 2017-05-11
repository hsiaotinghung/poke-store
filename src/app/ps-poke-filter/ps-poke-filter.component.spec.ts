import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsPokeFilterComponent } from './ps-poke-filter.component';

describe('PsPokeFilterComponent', () => {
  let component: PsPokeFilterComponent;
  let fixture: ComponentFixture<PsPokeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsPokeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsPokeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
