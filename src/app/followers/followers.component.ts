import { Component } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
})
export class FollowersComponent {
  followers!: any[];

  constructor(
    private router: ActivatedRoute,
    private service: FollowersService
  ) {}

  ngOnInit() {
    this.router.queryParamMap.subscribe((param) => console.log(param));
    this.service
      .getAll()
      .subscribe((followers) => (this.followers = followers));
  }
}
