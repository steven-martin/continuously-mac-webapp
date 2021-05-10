import { Component, OnInit, Input, ViewChildren } from '@angular/core';
import { Article } from '../../model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {

  @Input() filter: string;
  @Input() articles: Article[];

  constructor() {}

  ngOnInit() {
  }
}
