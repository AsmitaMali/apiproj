import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { vendorid } from './vendorid';

@Injectable({
  providedIn: 'root'
})
export class VendorDisplayService {
baseUrl="http://localhost:5002"

  constructor(private http: HttpClient) {}
  getvendors(): Observable<any> {
    //let body=JSON.stringify(ven);
    //console.log(body);
     return this.http.get<any>(`${this.baseUrl}/vendor`)
  };    
}
