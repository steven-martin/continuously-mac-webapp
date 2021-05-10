import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './articles.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { ArticleService } from '../../services/article.service';
import { Article } from 'src/app/model/article';
import { of } from 'rxjs';

const articleServiceSpy = jasmine.createSpyObj('ArticleService', [
  'getArticles',
  'getCategoriesList',
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

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ArticlesComponent, TimeAgoPipe],
        imports: [BrowserModule, HttpClientModule],
        providers: [{ provide: ArticleService, useValue: articleServiceSpy }],
      }).compileComponents();
    })
  );

  beforeEach(
    waitForAsync(() => {
      fixture = TestBed.createComponent(ArticlesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  describe('Construction()', () => {
    it(
      'should create',
      waitForAsync(() => {
        // Arrange, Act, Assert
        expect(component).toBeTruthy();
      })
    );
  });

  describe('HTML Template', () => {
    it(
      'should display the header section',
      waitForAsync(() => {
        // Arrange, Act
        fixture.detectChanges();

        // Assert
        const section = fixture.nativeElement.querySelector(
          '.header'
        );
        expect(section).toBeTruthy();
      })
    );

    it(
      'should display the filter section if filter is selected',
      waitForAsync(() => {
        // Arrange, Act
        component.filter = 'news';
        fixture.detectChanges();

        // Assert
        const section = fixture.nativeElement.querySelector(
          '.filter'
        );
        expect(section).toBeTruthy();
      })
    );

    it(
      'should NOT display the filter section if filter is selected',
      waitForAsync(() => {
        // Arrange, Act
        component.filter = null;
        fixture.detectChanges();

        // Assert
        const section = fixture.nativeElement.querySelector(
          '.filter'
        );
        expect(section).toBeFalsy();
      })
    );
  });

  it(
    'should display the article section',
    waitForAsync(() => {
      // Arrange, Act
      component.articles = mock;
      fixture.detectChanges();

      // Assert
      const section = fixture.nativeElement.querySelector(
        '.articles'
      );
      expect(section).toBeTruthy();
    })
  );
});
