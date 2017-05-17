import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsAboutComponent } from './ps-about.component';

describe('PsAboutComponent', () => {
  let component: PsAboutComponent;
  let fixture: ComponentFixture<PsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
