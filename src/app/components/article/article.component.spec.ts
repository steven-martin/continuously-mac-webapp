import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Article } from 'src/app/model/article';
import { TimeAgoPipe } from 'src/app/pipes/time-ago.pipe';
import { ArticleComponent } from './article.component';

const mock: Article = {
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
  };

describe('ArticleComponent', () => {
  let component: ArticleComponent;
  let fixture: ComponentFixture<ArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleComponent , TimeAgoPipe]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleComponent);
    component = fixture.componentInstance;
    component.article = mock;
    fixture.detectChanges();
  });

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
      'should display an article object with the correct values',
      waitForAsync(() => {
        // Arrange
        const article_image = fixture.nativeElement.querySelectorAll(
          '.article-image'
        );
        const article_category = fixture.nativeElement.querySelectorAll(
          '.badge-description'
        );
        const article_description = fixture.nativeElement.querySelectorAll(
          '.article-description'
        );
        const source_photo = fixture.nativeElement.querySelectorAll(
          '.article-byline-image'
        );
        
        // Act
        fixture.detectChanges();

        // Assert
        expect(article_image[0].getAttribute('src')).toEqual(
          mock.article_photo
        );
        expect(article_category[0].textContent).toEqual(mock.category);
        expect(article_description[0].textContent).toContain(
          mock.article_description
        );
        expect(source_photo[0].getAttribute('src')).toEqual(
          mock.source_photo
        );
      })
    );

    it(
      'should display an article object with the correct article link',
      waitForAsync(() => {
        // Arrange, Act
        fixture.detectChanges();

        // Assert
        const article_link = fixture.nativeElement.querySelectorAll(
          '[data-qa="article-link"]'
        );
        expect(article_link[0].getAttribute('href')).toEqual(
          mock.article_link
        );
      })
    );

    it(
      'should display an article object with the correct source link',
      waitForAsync(() => {
        // Arrange, Act
        component.article = mock;
        fixture.detectChanges();

        // Assert
        const source_url = fixture.nativeElement.querySelectorAll(
          '[data-qa="source-url"]'
        );
        expect(source_url[0].getAttribute('href')).toEqual(mock.source_url);
      })
    );
  });
});
