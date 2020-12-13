import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUsersEntity, UserserviceService} from '../services/userservice.service';
import {delay} from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user: IUsersEntity;
  username = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UserserviceService,
    private readonly  router: Router
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(p => {
      const id: string = p.get('id');
      const idNum = parseInt(id, 10);
      this.usersService.getUserById(idNum)
        .pipe(delay(500))
        .subscribe(
          u => {
            this.user = u;
            if (u) {
              this.user = u;
            } else {
              this.router.navigateByUrl('/user');

            }
          },
          e => {
            console.log(e);
          });
    });
  }

  change() {
    this.usersService.changeUser(this.user.id, this.user.username = this.username);
  }

}
