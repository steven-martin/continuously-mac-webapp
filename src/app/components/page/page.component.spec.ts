import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { ArticlesComponent } from '../articles/articles.component';
import { InfoComponent } from '../info/info.component';
import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../services/article/article.service';
import { of } from 'rxjs';
import { Article } from 'src/app/model/article';

const articleServiceSpy = jasmine.createSpyObj('ArticleService', ['getArticles']);
const mock: Article[] = [{
  source_name: 'mock',
  source_photo: 'http://mock.com/source_photo',
  article_description: 'this is a mock',
  article_link: 'http://mock.com/',
  article_photo: 'http://mock.com/photo',
  date: 'today',
  timestamp: 1,
  score: 100,
  category: 'mock',
  category_badge: 'mock',
  tags: ''
}];
articleServiceSpy.getArticles.and.returnValue(of(mock));

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageComponent,
        ArticlesComponent,
        InfoComponent,
        TimeAgoPipe
      ],
      imports: [
       BrowserModule,
       HttpClientModule
     ],
     providers: [
      {provide: ArticleService, useValue: articleServiceSpy}
     ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
