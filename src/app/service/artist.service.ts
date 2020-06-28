import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Artist} from '../entity/artist.entity';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) {
  }

  getAllArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(environment.baseUrlApi + '/artists');
  }

  getOneArtist(id: number): Observable<Artist> {
    return this.http.get<Artist>(environment.baseUrlApi + '/artists/' + id);
  }

  addArtist(artists: Artist) {
    return this.http.post(environment.baseUrlApi + '/artists', artists);
  }

  editArtist(id: number, artists: Artist) {
    return this.http.put(environment.baseUrlApi + '/artists/' + id, artists);
  }

  deleteArtist(id: number) {
    return this.http.delete(environment.baseUrlApi + '/artists/' + id);
  }
}
