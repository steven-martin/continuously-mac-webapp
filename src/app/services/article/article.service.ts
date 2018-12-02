import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Article } from '../../model/article';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ArticleService {

  private articleUrl = environment.apiUrl;  // URL to web api

  constructor(
    private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl);
  }

}
