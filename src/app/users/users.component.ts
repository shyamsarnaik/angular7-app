import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { AlbumDialogComponent } from './album-dialog/album-dialog.component';
import { MatDialog } from '@angular/material';

export interface User {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: Address;
  phone: String;
  website: String;
  company: Company;
}

export interface Address {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: GeoPoint;
}

export interface Company {
  name: String;
  catchPhrase: String;
  bs: String;
}

export interface GeoPoint {
  lat: String;
  lng: String;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'city', 'album'];
  dataSource: User;
  constructor(
    private service: UsersService,
    public dialog: MatDialog, ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe((res: User) => {
      this.dataSource = res;
    }, error => {
      console.log(error);
    });
  }

  openDialog(userDeatils: User): void {
    const dialogRef = this.dialog.open(AlbumDialogComponent, {
      width: '99%',
      data: userDeatils
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
