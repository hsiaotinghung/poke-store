import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsStoreComponent } from './ps-store.component';

describe('PsStoreComponent', () => {
  let component: PsStoreComponent;
  let fixture: ComponentFixture<PsStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
