import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistComponent } from './component/artist/artist.component';
import { ArtistListComponent } from './component/artist-list/artist-list.component';
import { ConcertComponent } from './component/concert/concert.component';
import { ConcertListComponent } from './component/concert-list/concert-list.component';
import { LineupComponent } from './component/lineup/lineup.component';
import { HeaderComponent } from './component/interface/header/header.component';
import { FooterComponent } from './component/interface/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistListComponent,
    ConcertComponent,
    ConcertListComponent,
    LineupComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
