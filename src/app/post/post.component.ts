import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  posts!: any[];
  constructor(private poseServices: PostService) { }
  ngOnInit() {
    this.poseServices.getAll<any[]>().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        alert('unexcepted error');
        console.log(error);
      }
    );
  }
  createPost(post: HTMLInputElement) {
    let newPost = { title: post.value };
    post.value = '';
    this.poseServices.create(post).subscribe(
      (response) => {
        this.posts.splice(0, 0, response);
        console.log(response);
      },
      (error) => {
        alert('unexcepted error');
        console.log(error);
      }
    );
  }
  updatePost(post: any) {
    this.poseServices.update(post).subscribe(
      (response) => console.log(response),
      (error) => {
        alert('unexcepted error');
        console.log(error);
      }
    );
  }
  deletePost(post: any) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.poseServices.delete(post).subscribe(null, (error) => {
      this.posts.splice(0, 0, post);

      alert('unexcepted error');
      console.log(error);
    });
  }
}
class ContentPost {
  constructor(obj?: any) {
    Object.assign(this, obj);
  }
  userId!: number;
  Id!: number;
  title!: string;
  body!: string;
}
