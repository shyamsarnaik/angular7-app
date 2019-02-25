import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfig {

  apiUrl: String = 'https://jsonplaceholder.typicode.com/';

}
