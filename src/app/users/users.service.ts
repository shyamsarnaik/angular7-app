import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';
import { User } from './users.component';
import { Album } from './album-dialog/album-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private config: AppConfig) { }

  getUsers(): Observable<User> {
    const endpoint = this.config.apiUrl + 'users';
    return this.http.get<User>(endpoint);
  }

  getAlbums(): Observable<any> {
    const endpoint = this.config.apiUrl + 'albums';
    return this.http.get<any>(endpoint);
  }

  getPhotos(): Observable<any> {
    const endpoint = this.config.apiUrl + 'photos';
    return this.http.get<any>(endpoint);
  }

}
