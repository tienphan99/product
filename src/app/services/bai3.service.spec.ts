import { TestBed } from '@angular/core/testing';

import { BAI3Service } from './bai3.service';

describe('Ex3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BAI3Service = TestBed.get(BAI3Service);
    expect(service).toBeTruthy();
  });
});