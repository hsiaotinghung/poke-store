import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsPokeSortComponent } from './ps-poke-sort.component';

describe('PsPokeSortComponent', () => {
  let component: PsPokeSortComponent;
  let fixture: ComponentFixture<PsPokeSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsPokeSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsPokeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
