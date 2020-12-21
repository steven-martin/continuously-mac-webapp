import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfoComponent } from './components/info/info.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleService } from './services/article.service';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PageComponent,
        FooterComponent,
        InfoComponent,
        ArticlesComponent,
        TimeAgoPipe,
      ],
      imports: [BrowserModule, HttpClientModule],
      providers: [ArticleService],
    }).compileComponents();
  }));

  describe('Construction()', () => {
    it('should create the app', waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
  });
});
