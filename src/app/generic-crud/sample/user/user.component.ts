import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserGenericCrudService } from '../../services/UserGenericCrud.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() inputUser : User;
  @Output() deleteItemEvent = new EventEmitter<User>();
  @Output() updateItemEvent = new EventEmitter<User>();
  public user: User;
  constructor(private service: UserGenericCrudService) {  
  }

  ngOnInit() {
  }

  update(user:User) {
    user.userName = user.userName + 'userName updated'
    this.service.update(user).subscribe(() => {this.updateItemEvent.emit(user);});
  }
  delete(user:User) {
    this.service.delete(user.id).subscribe(() => { this.deleteItemEvent.emit(user);
    });
  }
}
