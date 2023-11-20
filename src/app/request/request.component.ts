import { AfterViewInit, Component, Inject, ViewChild, Pipe } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
})
export class RequestComponent {
  requests: IRequest[] | undefined;
  constructor(
    private service: FollowersService,
    private dialogService: DialogService
  ) {}
  displayedColumns: string[] = [
    'id',
    'subject',
    'kind',
    'team',
    'project',
    'status',
  ];
  dataSource!: MatTableDataSource<IRequest>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  projectMap: { [id: string]: string } = {};

  ngOnInit() {
    this.dataSource = new MatTableDataSource<IRequest>(this.requests);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openAddProductDialog(): void {
    this.dialogService.openAddProductDialog();
  }
}
export interface IRequest {
  id: number;
  subject: string;
  kind: number;
  team: number;
  project: number;
  status: number;
}
