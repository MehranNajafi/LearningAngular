import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export class DataService {
  constructor(private url: string, private http: HttpClient) {}
  getAll<T>() {
    return this.http.get<T>(this.url).pipe(catchError(this.handleError));
  }
  create(post: HTMLInputElement) {
    return this.http.post(this.url, JSON.stringify(post));
  }
  update(resource: any) {
    return this.http.patch(
      this.url + '/' + resource.id,
      JSON.stringify({ isRead: true })
    );
  }
  delete(resource: any) {
    return this.http
      .delete(this.url + '/' + resource.id)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // You can log or display the error message here
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
