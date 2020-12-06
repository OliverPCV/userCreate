import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../services/userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username = '';

  constructor(private readonly userService: UserserviceService, private router: Router) { }

  ngOnInit() {
  }

  create(): void {
   this.userService.createUser(this.username).subscribe(user => this.router.navigateByUrl(`/user/${user.id}`));

  }

}
