import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../entity/user.entity';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Lineup} from '../entity/lineup.entity';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }
  getAllUser(): Observable<Lineup[]> {
    return this.http.get<User[]>(environment.baseUrlApi + '/artist');
  }
  addUser(user: User) {
    return this.http.post(environment.baseUrlApi + '/user', user);
  }

}
