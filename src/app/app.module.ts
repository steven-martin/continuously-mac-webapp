import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageComponent } from './components/page/page.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PageComponent,
    FooterComponent,
    TimeAgoPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
