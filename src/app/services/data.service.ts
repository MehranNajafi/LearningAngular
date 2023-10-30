import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { IRequest } from '../request/request.component';

export class DataService {
  constructor(private url: string, private http: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    // Set this option to true to disable SSL certificate validation
    // Be cautious when using this option in a production environment
    withCredentials: true,
  };
  getAll<T>() {
    return this.http.get<T>(this.url).pipe(catchError(this.handleError));
  }
  getAllFake() {
    // Simulate your desired response data
    const requests: IRequest[] = [{ id: 1, subject: 'تست 1', kind: 1, team: 1, project: 1, status: 1 },
    { id: 2, subject: 'تست 2', kind: 1, team: 1, project: 2, status: 2 },
    { id: 3, subject: 'تست 3', kind: 2, team: 2, project: 3, status: 3 },
    { id: 4, subject: 'تست 4', kind: 2, team: 3, project: 4, status: 1 },
    { id: 5, subject: 'تست 5', kind: 1, team: 2, project: 1, status: 2 },
    { id: 6, subject: 'تست 6', kind: 2, team: 3, project: 4, status: 5 },];
    const fakeResponse = {
      requests
    };
    return of(fakeResponse);
  }
  create(post: HTMLInputElement) {
    return this.http.post(this.url, JSON.stringify(post), this.httpOptions).pipe(catchError(this.handleError));;
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
