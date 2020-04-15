import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ArticleService } from './article.service';
import { environment } from 'src/environments/environment';

describe('ArticleService', () => {
  let service: ArticleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticleService],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArticleService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  describe('Constructor()', () => {
    // Arrange, Act, Assert
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getArticles()', () => {
    it('should be call the API and return the article payload', () => {
      // Arrange
      const mock = {
        source_name: 'mock',
        source_photo: 'http://mock.com',
        article_description: 'mock article',
        article_link: 'http://mock.com',
        article_photo: 'http://mock.com',
        date: new Date(),
        timestamp: 0,
        score: 0,
        category: '',
        category_badge: '',
        tags: '',
      };

      // Act
      service.getArticles().subscribe((data: any) => {
        expect(data).toBe(mock);
      });

      // Assert
      const req = httpTestingController.expectOne(environment.apiUrl);
      expect(req.request.method).toEqual('GET');
      req.flush(mock);
    });
  });
});
