import { Pipe, PipeTransform } from '@angular/core';
import { UserCard } from '../interfaces/users';
import { AuthService } from '../shared/services/auth.service';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  users: UserCard[] = [];


  constructor(private userServices : AuthService){
    this.users = this.userServices.users;
  }

  transform(value: number): unknown {
    const user = this.users.filter(user => user.id! == value)[0]
    return user.fullname;
  }

}
