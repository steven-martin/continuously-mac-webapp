import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Article } from '../../model/article';
import { environment } from '../../../environments/environment';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.apiUrl);
  }

}
