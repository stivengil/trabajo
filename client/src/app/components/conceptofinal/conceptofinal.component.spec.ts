import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptofinalComponent } from './conceptofinal.component';

describe('ConceptofinalComponent', () => {
  let component: ConceptofinalComponent;
  let fixture: ComponentFixture<ConceptofinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptofinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptofinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
