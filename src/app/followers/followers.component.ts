import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import buildQuery from 'odata-query';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent {
  constructor(
    private router: ActivatedRoute,
    private service: FollowersService
  ) { }

  followers!: IGitHubFollowerDetail[];
  displayedColumns: string[] = ['id', 'avatar_url', 'login', 'html_url'];
  dataSource!: MatTableDataSource<IGitHubFollowerDetail>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.loadfollowers(1, this.paginator.pageSize);
    this.sort.sortChange.subscribe(() => {
      this.loadfollowers(1, this.paginator.pageSize);
    });
  }

  loadfollowers(page: number, itemsPerPage: number) {
    if (this.paginator) {
      const top = itemsPerPage;
      const skip = itemsPerPage * (page - 1);
      const sortDirection = this.sort.direction || 'asc';
      const sortActive = this.sort.active || 'id';
      const orderBy = [sortActive + ' ' + sortDirection];
      this.service.getAllOdata<IGitHubFollowerDetail[]>(buildQuery({ top, skip, orderBy })).subscribe((followers) => {
        this.followers = followers;
        this.dataSource = new MatTableDataSource<IGitHubFollowerDetail>(
          this.followers
        );
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
    }
  }
  onPaginatorChange(event: any) {
    this.loadfollowers(event.pageIndex + 1, event.pageSize);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
export interface IGitHubFollowerDetail {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
