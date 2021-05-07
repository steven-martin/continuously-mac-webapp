import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './containers/page/page.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ArticleService } from './services/article.service';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    PageComponent,
    FooterComponent,
    TimeAgoPipe,
    HeaderComponent,
    ArticleComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [ArticleService],
  bootstrap: [AppComponent],
})
export class AppModule {}
