import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/data-base.service';
import {CookieNames, UserRoles} from '../models/enums.model';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private dataBaseService: DataBaseService) {}

    canActivate() {
      console.log('sadasd')

      if (this.dataBaseService.isLoggedIn()) {
        return true;
      }

      this.router.navigate(['/login']);
      return false;
    }
}