import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsFooterComponent } from './ps-footer.component';

describe('PsFooterComponent', () => {
  let component: PsFooterComponent;
  let fixture: ComponentFixture<PsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
