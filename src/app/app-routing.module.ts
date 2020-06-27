import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistComponent } from './component/artist/artist.component';
import {ArtistListComponent} from './component/artist-list/artist-list.component';
import {ConcertComponent} from './component/concert/concert.component';
import {ConcertListComponent} from './component/concert-list/concert-list.component';


const routes: Routes = [
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'artists', component: ArtistListComponent},
  {path: 'concert/:id', component: ConcertComponent},
  {path: 'concerts', component: ConcertListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
