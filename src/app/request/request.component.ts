import { AfterViewInit, Component, Inject, ViewChild, Pipe } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjectService } from '../project/project.service';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent {
  constructor(
    private projectService: ProjectService,
    private service: FollowersService
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

  requests = this.service.requests$;
  projects = this.projectService.projects$;
  projectMap: { [id: string]: string } = {};

  ngOnInit() {
    this.projects.forEach(project => {
      this.projectMap[project.id] = project.subject;
    });
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
}
export interface IRequest {
  id: number;
  subject: string;
  kind: number;
  team: number;
  project: number;
  status: number;
}
