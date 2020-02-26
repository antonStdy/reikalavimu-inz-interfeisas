import {Injectable} from '@angular/core'
import {CookieService} from 'ngx-cookie-service';
import {CookieNames, UserRoles} from '../models/enums.model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class DataBaseService {



  constructor(
    private cookieService: CookieService
  ) {}

  isLoggedIn() {
    const userRole = this.cookieService.get(CookieNames.USER_ROLE);
    return userRole === UserRoles.CLIENT || userRole === UserRoles.WORKER;
  }

  getUserRole(): string {
    return this.cookieService.get(CookieNames.USER_ROLE);
  }

  setUsername(username: string) {
    this.cookieService.set(CookieNames.USER_ROLE, username);
  }
}