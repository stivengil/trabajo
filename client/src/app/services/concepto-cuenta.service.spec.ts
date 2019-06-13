import { TestBed } from '@angular/core/testing';

import { ConceptoCuentaService } from './concepto-cuenta.service';

describe('ConceptoCuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConceptoCuentaService = TestBed.get(ConceptoCuentaService);
    expect(service).toBeTruthy();
  });
});
