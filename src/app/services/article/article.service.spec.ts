import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { ArticleService } from './article.service';
import { environment } from 'src/environments/environment.prod';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ArticleService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ArticleService);
  });

  afterEach(() => {
    httpTestingController.verify();
});

  describe('Constructor()', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
});
