import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Lineup} from '../entity/lineup.entity';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LineupService {

  constructor(private http: HttpClient) {
  }

  getAllLineup(): Observable<Lineup[]> {
    return this.http.get<Lineup[]>(environment.baseUrlApi + '/lineup');
  }

  getOneLineup(id: number): Observable<Lineup> {
    return this.http.get<Lineup>(environment.baseUrlApi + '/lineup/' + id);
  }

  addLineup(lineup: Lineup) {
    return this.http.post(environment.baseUrlApi + '/lineup', lineup);
  }

  editLineup(id: number, lineup: Lineup) {
    return this.http.put(environment.baseUrlApi + '/lineup/' + id, lineup);
  }

  deleteLineup(id: number) {
    return this.http.delete(environment.baseUrlApi + '/lineup/' + id);
  }
}
