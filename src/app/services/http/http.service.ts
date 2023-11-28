import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseUrl = 'https://localhost:44366/api';
  
  private headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: `Bearer ${ localStorage.getItem('token')}`
    
  });
//   private header = new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`)

  constructor(private http: HttpClient) {}
  postService(url: string, reqData: any ) {
   console.log(url,reqData,localStorage.getItem('token'));
    return this.http.post(this.baseUrl + url, reqData,  {
      headers: this.headers,
    });
  }

  getService(url: string ) {
    console.log(url,localStorage.getItem('token'));
    return this.http.get(this.baseUrl + url, {
      headers:this.headers,
      
      
    });
  }
}