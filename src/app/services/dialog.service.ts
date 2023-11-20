import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openAddProductDialog(): void {
    this.dialog.open(RequestDialogComponent, {
      width: '70%', 
    });
  }
}
