import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends DataService{
  constructor(http: HttpClient) {
    super('https://eit-pmapp/ProjectManagerAPI/api/EITAuthentication/Login',http)
  }
}