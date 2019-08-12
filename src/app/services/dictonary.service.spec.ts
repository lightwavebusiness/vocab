import { TestBed } from '@angular/core/testing';
import { WordService } from './dictonary.service';

describe('DictonaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WordService = TestBed.get(WordService);
    expect(service).toBeTruthy();
  });
});
