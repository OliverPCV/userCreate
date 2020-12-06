import { Component, OnInit } from '@angular/core';
import {IUsersEntity, UserserviceService} from '../services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: IUsersEntity[] = [];
  constructor(private readonly usersService: UserserviceService) {
    usersService.getAllUsers().subscribe(
      u => this.users = u,
      e => console.log(e)
    );
  }

  ngOnInit() {
  }

}
