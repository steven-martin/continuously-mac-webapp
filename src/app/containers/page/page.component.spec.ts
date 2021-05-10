import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { ArticlesComponent } from '../../components/articles/articles.component';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../services/article.service';
import { of } from 'rxjs';
import { Article } from 'src/app/model/article';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

const mockHeadlineArticle: Article[] = [
  {
    source_name: 'headline mock',
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
const mockCatagoryArticle: Article[] = [
  {
    source_name: 'catagory mock',
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

const mockCatagories: any =[];
mockCatagories['news'] = mockCatagoryArticle;


const articleServiceMock = {
  getCategoriesList: () => ['mock'],
  catagories: of(mockCatagories),
  headlines: of(mockHeadlineArticle),
  updateArticles: () => null
}

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [
          PageComponent,
          ArticlesComponent,
          TimeAgoPipe,
          HeaderComponent,
        ],
        imports: [BrowserModule, HttpClientModule],
        providers: [
          { provide: ActivatedRoute, useValue: {}},
          { provide: ArticleService, useValue: articleServiceMock }
        ],
      }).compileComponents();
    })
  );



  describe('Construction', () => {
    beforeEach(() => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: { params: of({filter: null}) } });
      TestBed.compileComponents();
      fixture = TestBed.createComponent(PageComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    // Arrange, Act, Assert
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit()', () => {
    it(
      'should update the articles with the selected catagory articles if filter is set',
      waitForAsync(() => {
        // Arrange
        TestBed.overrideProvider(ActivatedRoute, { useValue: { params: of({filter: 'news'}) } });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.articles = null;

        // Act
        component.ngOnInit();
        fixture.detectChanges();

        // Assert
        expect(component.articles).toEqual(mockCatagoryArticle);
      })
    );

    it(
      'should update the articles with the headlines if no catagory is set',
      waitForAsync(() => {
        // Arrange
        TestBed.overrideProvider(ActivatedRoute, { useValue: { params: of({filter: null}) } });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.articles = null;

        // Act
        component.ngOnInit();
        fixture.detectChanges();

        // Assert
        expect(component.articles).toEqual(mockHeadlineArticle);
      })
    );

    it(
      'should update the catagories based on the available data',
      waitForAsync(() => {
        // Arrange
        TestBed.overrideProvider(ActivatedRoute, { useValue: { params: of({filter: null}) } });
        TestBed.compileComponents();
        fixture = TestBed.createComponent(PageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.catagories = null;

        // Act
        component.ngOnInit();
        fixture.detectChanges();

        // Assert
        expect(component.catagories).toEqual(['news']);
      })
    );
  });
});
