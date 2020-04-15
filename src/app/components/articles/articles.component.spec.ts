import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/model/article';
import { of } from 'rxjs';

const articleServiceSpy = jasmine.createSpyObj('ArticleService', [
  'getArticles',
]);
const mock: Article[] = [
  {
    source_name: 'mock',
    source_photo: 'http://mock.com/source_photo',
    source_url: 'http://mock.com/',
    article_description: 'this is a mock',
    article_link: 'http://mock.com/',
    article_photo: 'http://mock.com/photo',
    date: 'today',
    timestamp: 1,
    score: 100,
    category: 'mock',
    category_badge: 'mock',
    tags: '',
  },
];
articleServiceSpy.getArticles.and.returnValue(of(mock));

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesComponent, TimeAgoPipe],
      imports: [BrowserModule, HttpClientModule],
      providers: [{ provide: ArticleService, useValue: articleServiceSpy }],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  describe('Construction()', () => {
    it('should create', async(() => {
      // Arrange, Act, Assert
      expect(component).toBeTruthy();
    }));
  });

  describe('ngOnInit()', () => {
    it('should collect a valid article object from the API and update the articles property', async(() => {
      // Arrange, Act
      component.ngOnInit();
      fixture.detectChanges();

      // Assert
      expect(articleServiceSpy.getArticles).toHaveBeenCalled();
      expect(component.articles).toEqual(mock);
    }));
  });

  describe('HTML Template', () => {
    it('should display an article object with the correct values', async(() => {
      // Arrange, Act
      component.articles = mock;
      fixture.detectChanges();

      // Assert
      const article_photo = fixture.nativeElement.querySelectorAll(
        '.article_image'
      );
      expect(article_photo[0].getAttribute('src')).toEqual(
        mock[0].article_photo
      );

      const article_category = fixture.nativeElement.querySelectorAll(
        '[data-qa="article_category"]'
      );
      expect(article_category[0].textContent).toEqual(mock[0].category);

      const article_description = fixture.nativeElement.querySelectorAll(
        '.article_description'
      );
      expect(article_description[0].textContent).toContain(
        mock[0].article_description
      );

      const source_photo = fixture.nativeElement.querySelectorAll(
        '.article_byline_image'
      );
      expect(source_photo[0].getAttribute('src')).toEqual(mock[0].source_photo);
    }));

    it('should display an article object with the correct article link', async(() => {
      // Arrange, Act
      component.articles = mock;
      fixture.detectChanges();

      // Assert
      const article_link = fixture.nativeElement.querySelectorAll(
        '[data-qa="article_link"]'
      );
      expect(article_link[0].getAttribute('href')).toEqual(
        mock[0].article_link
      );
    }));

    it('should display an article object with the correct source link', async(() => {
      // Arrange, Act
      component.articles = mock;
      fixture.detectChanges();

      // Assert
      const source_url = fixture.nativeElement.querySelectorAll(
        '[data-qa="source_url"]'
      );
      expect(source_url[0].getAttribute('href')).toEqual(mock[0].source_url);
    }));
  });
});
