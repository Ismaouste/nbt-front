import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Concert} from '../entity/concert.entity';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  constructor(private http: HttpClient) {
  }

  getAllConcert(): Observable<Concert[]> {
    return this.http.get<Concert[]>(environment.baseUrlApi + '/concert');
  }

  getOneConcert(id: number): Observable<Concert> {
    return this.http.get<Concert>(environment.baseUrlApi + '/concert/' + id);
  }

  addConcert(concert: Concert) {
    return this.http.post(environment.baseUrlApi + '/concert', concert);
  }

  editConcert(id: number, concert: Concert) {
    return this.http.put(environment.baseUrlApi + '/concert/' + id, concert);
  }

  deleteConcert(id: number) {
    return this.http.delete(environment.baseUrlApi + '/concert/' + id);
  }
}
