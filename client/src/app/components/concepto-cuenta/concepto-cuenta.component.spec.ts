import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptoCuentaComponent } from './concepto-cuenta.component';

describe('ConceptoCuentaComponent', () => {
  let component: ConceptoCuentaComponent;
  let fixture: ComponentFixture<ConceptoCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptoCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptoCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
