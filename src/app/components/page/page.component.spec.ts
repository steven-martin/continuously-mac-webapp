import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';
import { ArticlesComponent } from '../articles/articles.component';
import { InfoComponent } from '../info/info.component';
import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from '../../services/article/article.service';

describe('BoardComponent', () => {
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
       ArticleService
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
