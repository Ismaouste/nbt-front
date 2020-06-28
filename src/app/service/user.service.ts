import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/user.entity';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    return this.http.post(environment.apiPrefix + '/user', user);
  }

}
