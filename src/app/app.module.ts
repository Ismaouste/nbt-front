import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArtistComponent} from './component/artist/artist.component';
import {ArtistListComponent} from './component/artist-list/artist-list.component';
import {ConcertComponent} from './component/concert/concert.component';
import {ConcertListComponent} from './component/concert-list/concert-list.component';
import {LineupComponent} from './component/lineup/lineup.component';
import {HeaderComponent} from './component/interface/header/header.component';
import {FooterComponent} from './component/interface/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './component/admin/admin.component';
import { RegisterComponent } from './component/register/register.component';


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
    HomeComponent,
    AdminComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
