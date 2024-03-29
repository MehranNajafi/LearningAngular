import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class PostService extends DataService{
  constructor(http: HttpClient) {
    super('https://jsonplaceholder.typicode.com/posts',http)
  }
}
