import { TestBed, async } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { ArticlesComponent } from './components/articles/articles.component';

import { ArticleService } from './services/article/article.service';

import { TimeAgoPipe } from './pipes/time-ago/time-ago.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageComponent,
        FooterComponent,
        InfoComponent,
        ArticlesComponent,
        TimeAgoPipe
      ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [
        ArticleService
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
