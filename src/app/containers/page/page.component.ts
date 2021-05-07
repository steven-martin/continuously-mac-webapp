import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit {

  filter: string;
  catagories: string[];
  articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articleService.updateArticles();
    this.route.params.subscribe((params) => {
      this.filter = params.filter;
      this.articleService.catagories.subscribe((articles) => {
        if ((this.filter) && (articles[this.filter])) {
          this.articles = <Article[]>articles[this.filter];
        } else {
          this.articleService.headlines.subscribe((articles) => {
            this.articles = articles;
          });
        }
        this.catagories = [];
        for (const [key, value] of Object.entries(articles)) {
          if ((key != 'News') && (value.length > 0)) {
            this.catagories.push(key);
          }
        }
      });
    });
  }
}
