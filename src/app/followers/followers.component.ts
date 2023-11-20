import { AfterViewInit, Component, Inject, ViewChild } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { RequestDialogComponent } from '../request-dialog/request-dialog.component';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent {
  constructor(
    private router: ActivatedRoute,
    private service: FollowersService,
    private dialog: MatDialog
  ) { }

  followers!: IGitHubFollowerDetail[];
  displayedColumns: string[] = ['id', 'avatar_url', 'login', 'html_url'];
  dataSource!: MatTableDataSource<IGitHubFollowerDetail>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.service.getAll<IGitHubFollowerDetail[]>().subscribe((followers) => {
      this.followers = followers;
      this.dataSource = new MatTableDataSource<IGitHubFollowerDetail>(
        this.followers
      );
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  openRequestDialog(){
     this.dialog.open(RequestDialogComponent, {
      width: '400px', // Adjust the width as needed
    });
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
