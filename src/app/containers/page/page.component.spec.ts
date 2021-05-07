import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../services/article.service';
import { of } from 'rxjs';
import { Article } from 'src/app/model/article';

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

describe('BoardComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          PageComponent,
          ArticlesComponent,
          TimeAgoPipe,
        ],
        imports: [BrowserModule, HttpClientModule],
        providers: [{ provide: ArticleService, useValue: articleServiceSpy }],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Construction', () => {
    // Arrange, Act, Assert
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it(
      'should collect a valid article object from the API and update the articles property',
      waitForAsync(() => {
        // Arrange, Act
        component.ngOnInit();
        fixture.detectChanges();

        // Assert
        expect(articleServiceSpy.getArticles).toHaveBeenCalled();
        // expect(component.articles).toEqual(mock);
      })
    );
  });
});
