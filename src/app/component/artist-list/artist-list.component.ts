import { Component, OnInit } from '@angular/core';
import { ArtistService} from '../../service/artist.service';
import { Artist } from '../../entity/artist.entity';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  artists: Artist[];

  constructor(private artistServce: ArtistService, private loader : NgxUiLoaderService) { }

  ngOnInit(): void {
    this.loader.start();
    this.artistServce.getAllArtist().subscribe(value => {
      this.artists = value;
      this.loader.stop();
    });
  }

}
