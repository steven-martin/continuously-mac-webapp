import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ArticlesComponent } from './articles.component';
import { PageComponent } from '../page/page.component';
import { InfoComponent } from '../info/info.component';

import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';

import { ArticleService } from '../../services/article/article.service';

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
        ArticleService
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
