import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/data-base.service';
import {CookieNames, UserRoles} from '../models/enums.model';


@Injectable()
export class RoleGuard implements CanActivate {
    constructor(
        private router: Router,
        private dataBaseService: DataBaseService) {}

    canActivate() {
        if (this.dataBaseService.getUserRole() === UserRoles.CLIENT) {
          this.router.navigate(['/client']);
          return true;
        } else if (this.dataBaseService.getUserRole() === UserRoles.WORKER) {
          this.router.navigate(['/worker']);
          return true;
        } else {
          // this.router.navigate(['/login']);
          return false;
        }

    }
}