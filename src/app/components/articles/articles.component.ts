import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from '../../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() filter: string;
  @Input() articles: Article[];

  public filters: string[];

  constructor(private articleService: ArticleService) {
    this.filters = articleService.getCategoriesList(); 
  }

  ngOnInit() {}
}
