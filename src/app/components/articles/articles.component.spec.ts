import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesComponent } from './articles.component';
import { PageComponent } from '../page/page.component';
import { InfoComponent } from '../info/info.component';

import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';

import { ArticleService } from '../../services/article/article.service';
import { Article } from 'src/app/model/article';
import { of } from 'rxjs';

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

describe('ArticlesComponent', () => {
  let component: ArticlesComponent;
  let fixture: ComponentFixture<ArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ArticlesComponent,
        PageComponent,
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

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should have at least one valid article', async(() => {
    expect(Object.keys(component.articles[0])).toContain('source_name');
    expect(Object.keys(component.articles[0])).toContain('source_photo');
    expect(Object.keys(component.articles[0])).toContain('article_description');
    expect(Object.keys(component.articles[0])).toContain('article_link');
    expect(Object.keys(component.articles[0])).toContain('article_photo');
    expect(Object.keys(component.articles[0])).toContain('date');
    expect(Object.keys(component.articles[0])).toContain('timestamp');
    expect(Object.keys(component.articles[0])).toContain('score');
    expect(Object.keys(component.articles[0])).toContain('category');
    expect(Object.keys(component.articles[0])).toContain('category_badge');
    expect(Object.keys(component.articles[0])).toContain('tags');
  }));
});
