import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User;
  
   constructor(private route: ActivatedRoute, private router: Router, private userService: UserService,private _location: Location) {
     this.user = new User();
   }
  
   onSubmit() {
     this.userService.save(this.user).subscribe(result => this.gotoUserList());
   }
  
   gotoUserList() {
     this.router.navigate(['/users']);
   }

   backClick()
   {
    this._location.back();
   }

}
