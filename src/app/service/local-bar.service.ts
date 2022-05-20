import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalBarService {

  constructor(private http: HttpClient) { }

  getCoctailsList(input?: string) {
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`;
    let request = this.http.get<any>(url)
    return request.pipe(catchError(this.handleError))
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
