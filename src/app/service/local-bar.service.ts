import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Coctail } from '../models/coctails.model';

@Injectable({
  providedIn: 'root'
})
export class LocalBarService {

  constructor(private http: HttpClient) { }

  getDrinks(input?: string) {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;
    let request = this.http.get<any>(url)
    return request.pipe(catchError(this.handleError))
  }

  addCoctail(coctail: Coctail) {
    let url = 'http://localhost:3000/server';
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.post<any[]>(url, coctail, {headers});
  }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage))
  }
}
