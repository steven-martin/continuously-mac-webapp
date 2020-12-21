import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Article } from '../model/article';
import { environment } from '../../environments/environment';

@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.apiUrl);
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(environment.apiUrl + '/categories');
  }

  getFilters(): string[] {
    return [
      'iPhone',
      'iPad',
      'iOS',
      'MacBook',
      'iMac',
      'Mac',
      'macOS',
      'Apple-Watch',
      'watchOS',
      'Apple-TV',
      'tvOS',
      'Apple-Music',
      'App-Store',
      'WWDC',
      'Siri',
      'Safari',
      'iBooks',
      'iTunes',
      'iPod',
    ];
  }
}
