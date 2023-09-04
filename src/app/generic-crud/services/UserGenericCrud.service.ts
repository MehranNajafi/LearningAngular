import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';
import { ResourceService } from './resource.service';

@Injectable({ providedIn: 'root' })
export class UserGenericCrudService extends ResourceService<User> {
  constructor(private http: HttpClient) {
    super(
      http,
      User,
      'http://localhost:3010/users'
    );
  }
}
