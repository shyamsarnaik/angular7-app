import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatStepper } from '@angular/material';
import { User } from '../users.component';
import { UsersService } from '../users.service';

export interface Album {
  id: Number;
  title: String;
  userId: Number;
}

export interface Photo {
  albumId: Number;
  id: Number;
  thumbnailUrl: String;
  title: String;
  url: String;
}

@Component({
  selector: 'app-album-dialog',
  templateUrl: './album-dialog.component.html',
  styleUrls: ['./album-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AlbumDialogComponent implements OnInit {

  photos: Photo;
  selectedAlbum: Album;
  loading: Boolean = false;
  albums: any;

  @ViewChild('stepper') stepper: MatStepper;

  constructor(public dialogRef: MatDialogRef<AlbumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private service: UsersService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.loading = true;
    this.service.getAlbums().subscribe(res => {

      this.albums = res.filter(o => {
        return o.userId === this.data.id;
      });
      this.loading = false;
    });
  }

  viewPhotos(album: Album) {
    this.selectedAlbum = album;
    this.loading = true;
    this.stepper.selectedIndex = 1;
    this.photos = null;

    this.service.getPhotos().subscribe(res => {

      this.photos = res.filter(o => {
        return o.albumId === album.id;
      });
      this.loading = false;
    });
  }

  gotoAlbums() {
    this.stepper.selectedIndex = 0;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
