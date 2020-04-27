import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private http: HttpClient) { }

  getPromotions(): Observable< Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'leaders');
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id );
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]));
  }

}
