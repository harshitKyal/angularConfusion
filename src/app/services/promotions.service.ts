import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map , catchError} from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
@Injectable({
  providedIn: 'root'
})
export class PromotionsService {

  constructor(private http: HttpClient , private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable< Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'leaders')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id )
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
