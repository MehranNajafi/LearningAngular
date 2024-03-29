import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-githubfollowers',
  templateUrl: './githubfollowers.component.html',
  styleUrls: ['./githubfollowers.component.css'],
})
export class GithubfollowersComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }
}
