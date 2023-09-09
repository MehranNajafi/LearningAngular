import { AfterViewInit, Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { UserGenericCrudService } from '../../services/UserGenericCrud.service';
import { User } from '../../models/user.model';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'user-crud',
  templateUrl: './userList-crud.component.html',
  styleUrls: ['./userList-crud.component.css']
})
export class UserCrudComponent implements OnInit, AfterViewInit {
  //@ViewChild(UserComponent) public userChild: UserComponent
  constructor(private service: UserGenericCrudService) {
  }

  public users: User[];

  ngOnInit(): void {
    this.service.get().subscribe(users => this.users = users);
  }
  ngAfterViewInit(): void {
    // this.userChild.setData(user))
  }
  createUser(input: HTMLInputElement) {

    let user = new User();
    user.userName = input.value,
      user.email = 'x@y.com'
    user.passs = '78910'
    user.isActive = true;

    input.value = '';

    this.service.create(user).subscribe(newuser => {
      user.id = newuser.id
      this.users.splice(0, 0, user);
    });
  }
  // updateUser(user: User) {
  //   this.service.update(user).subscribe(updatedUser => console.log(updatedUser));
  // }
  // deleteUser(user: User) {
  //   this.service.delete(user.id).subscribe(() => {
  //     let index = this.users.indexOf(user);
  //     this.users.splice(index, 1);
  //   });
  // }
  deleteUser(user: User) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
  updateUser(user: User) {
    let index = this.users.indexOf(user);
    //this.users.splice(index, 1);
    this.users[index] = user;
  }
}

