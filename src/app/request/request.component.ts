import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  constructor(private service: FollowersService) { }
  requests: IRequest[];
  displayedColumns: string[] = ['id', 'subject', 'kind', 'team', 'project', 'status'];
  dataSource!: MatTableDataSource<IRequest>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit() {
    this.service.getAllFake().subscribe((reqs) => {
      this.requests = reqs.requests;
      this.dataSource = new MatTableDataSource<IRequest>(
        this.requests
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
export interface IRequest {
  id: number,
  subject: string,
  kind: number,
  team: number,
  project: number,
  status: number
}
