import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../model/article';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  articles: Article[];

  @Input() filter: string;
  validFilter = false;

  constructor(private articleService: ArticleService) {}

  getArticles(): void {
    this.articleService
      .getArticles()
      .subscribe((articles) => (this.articles = articles));
  }

  ngOnInit() {
    this.getArticles();
    console.log('categories', this.articleService.getCategories());
    console.log('selected filter:', this.filter);
    this.validFilter = this.articleService
      .getFilters()
      .map(function (x) {
        return x.toLowerCase();
      })
      .includes(this.filter.toLowerCase());
  }
}
