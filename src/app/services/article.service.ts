import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Article } from '../model/article';
import { environment } from '../../environments/environment';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  public headlines: Observable<Article[]> ;
  public catagories: Observable<any[]>;

  updateArticles(): void {
    this.headlines = this.http.get<Article[]>(environment.apiUrl);
    this.catagories = this.http.get<any[]>(environment.apiUrl + 'categories/');
  }
}
