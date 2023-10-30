import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}
  projects$ = [
    { id: 1, subject: 'مشترکات' },
    { id: 2, subject: 'تولز' },
    { id: 3, subject: 'مالی' },
    { id: 4, subject: 'عمر' },
  ];
}
