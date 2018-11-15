import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private localStorage: LocalStorageService ) { }

  setLocalStorage(valueToSet: string) {
    console.log(valueToSet)
    this.localStorage.store('token', valueToSet);
  }

  getLocalStorage() {
    return this.localStorage.retrieve('token');
  }

  deleteLocalStorage() {
    this.localStorage.clear('token');
  }
}
