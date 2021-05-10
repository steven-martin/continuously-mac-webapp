import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ArticleService } from './article.service';
import { environment } from 'src/environments/environment';
import { Article } from '../model/article';

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

  describe('updateArticles()', () => {
    it('should be call the API and update the headlines', () => {
      // Arrange
      const mock: Article = {
        source_name: 'mock',
        source_photo: 'http://mock.com',
        source_url: 'http://mock.com',
        article_description: 'mock article',
        article_link: 'http://mock.com',
        article_photo: 'http://mock.com',
        date: '',
        timestamp: 0,
        score: 0,
        category: '',
        category_badge: '',
        tags: '',
      };

      // Act
      service.updateArticles();
      service.headlines.subscribe((data: any) => {
        expect(data).toBe(mock);
      });

      // Assert
      const reqHeadline = httpTestingController.expectOne(environment.apiUrl);
      expect(reqHeadline.request.method).toEqual('GET');
      reqHeadline.flush(mock);
    });

    it('should be call the API and update the catagories', () => {
      // Arrange
      const mock = {
        news: [
          {
            source_name: 'mock',
            source_photo: 'http://mock.com',
            source_url: 'http://mock.com',
            article_description: 'mock article',
            article_link: 'http://mock.com',
            article_photo: 'http://mock.com',
            date: '',
            timestamp: 0,
            score: 0,
            category: '',
            category_badge: '',
            tags: '',
          }
        ]
      }

      // Act
      service.updateArticles();
      service.catagories.subscribe((data: any) => {
        expect(data).toBe(mock);
      });

      // Assert
      const reqHeadline = httpTestingController.expectOne(environment.apiUrl + 'categories/');
      expect(reqHeadline.request.method).toEqual('GET');
      reqHeadline.flush(mock);
    });
  });

  describe('updateArticles()', () => {
    it('should be call the API and update the headlines', () => {
      // Arrange
      const mock: Article = {
        source_name: 'mock',
        source_photo: 'http://mock.com',
        source_url: 'http://mock.com',
        article_description: 'mock article',
        article_link: 'http://mock.com',
        article_photo: 'http://mock.com',
        date: '',
        timestamp: 0,
        score: 0,
        category: '',
        category_badge: '',
        tags: '',
      };

      // Act
      service.updateArticles();
      service.headlines.subscribe((data: any) => {
        expect(data).toBe(mock);
      });

      // Assert
      const reqHeadline = httpTestingController.expectOne(environment.apiUrl);
      expect(reqHeadline.request.method).toEqual('GET');
      reqHeadline.flush(mock);
    });
  });
});
