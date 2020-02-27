import {Injectable} from '@angular/core'
import {CookieService} from 'ngx-cookie-service';
import {CookieNames, UserRoles} from '../models/enums.model';
import { Router } from '@angular/router';
import { StorageItem, DeliveredItem} from '../models/interfaces.model';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {



  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  isLoggedIn() {
    const userRole = this.cookieService.get(CookieNames.USER_ROLE);
    return userRole === UserRoles.CLIENT || userRole === UserRoles.WORKER;
  }

  logOut() {
    this.cookieService.delete(CookieNames.USER_ROLE);
    this.router.navigate(['/login']);
  }

  getUserRole(): string {
    return this.cookieService.get(CookieNames.USER_ROLE);
  }

  setUsername(username: string) {
    this.cookieService.set(CookieNames.USER_ROLE, username);
  }


  initStorageItems() {

    const storageItems: StorageItem[] = [
      {name: 'Prekė 1', description: 'Prekės 1 aprašymas', amount: 0, place:'10A'},
      {name: 'Prekė 2', description: 'Prekės 2 aprašymas', amount: 1232, place:'dfs'},
      {name: 'Prekė 3', description: 'Prekės 3 aprašymas', amount: 242, place:'sdv'},
      {name: 'Prekė 4', description: 'Prekės 4 aprašymas', amount: 4312, place:'dbf'},
      {name: 'Prekė 5', description: 'Prekės 5 aprašymas', amount: 0, place:'bd'},
      {name: 'Prekė 6', description: 'Prekės 6 aprašymas', amount: 162, place:' gf'},
      {name: 'Prekė 7', description: 'Prekės 7 aprašymas', amount: 0, place:'wef'},
      {name: 'Prekė 8', description: 'Prekės 8 aprašymas', amount: 1236, place:'123'},
      {name: 'Prekė 9', description: 'Prekės 9 aprašymas', amount: 12346, place:'v'},
      {name: 'Prekė 10', description: 'Prekės 10 aprašymas', amount: 0, place:'v3'},
      {name: 'Prekė 11', description: 'Prekės 11 aprašymas', amount: 13452, place:'3b'},
      {name: 'Prekė 12', description: 'Prekės 12 aprašymas', amount: 3412, place:'3grh'},
      {name: 'Prekė 13', description: 'Prekės13 aprašymas', amount: 612, place:'3rb'},
    ];

    this.cookieService.set(CookieNames.STORAGE_ITEMS, JSON.stringify(storageItems));
  }

  initDeliveredItems() {
    const deliveredItems: DeliveredItem[] = [
      {name: 'Prekė 3', description: 'Prekės 3 aprašymas', firstStop:'dsaada', adress:'lw;c2'},
      {name: 'Prekė 4', description: 'Prekės 4 aprašymas', firstStop:'mvr;lvdflm;',  adress:'lw;c2'},
      {name: 'Prekė 12', description: 'Prekės 5 aprašymas', firstStop:'12423rk', adress:'lw;c2'},
      {name: 'Prekė 1', description: 'Prekės 6 aprašymas', firstStop:'1kmk',adress:'lw;c2'},
      {name: 'Prekė 7', description: 'Prekės 7 aprašymas', firstStop:'12pmq',adress:'lw;c2'},
      {name: 'Prekė 5', description: 'Prekės 8 aprašymas', firstStop:'dsaada',adress:'lw;c2'},
      {name: 'Prekė 9', description: 'Prekės 9 aprašymas', firstStop:'dsaada',adress:'lw;c2'},
      {name: 'Prekė 456', description: 'Prekės 10 aprašymas', firstStop:'dsaada',adress:'lw;c2'},
      {name: 'Prekė 11', description: 'Prekės 11 aprašymas', firstStop:'dsaada',adress:'lw;c2'},
    ]

    this.cookieService.set(CookieNames.DELIVERED_ITEMS, JSON.stringify(deliveredItems));
  }

  getStorageItems(): StorageItem[] {
    return (JSON.parse(this.cookieService.get(CookieNames.STORAGE_ITEMS) || '[]') as StorageItem[]);
  }

  getDeliveredItems(): DeliveredItem[] {
    return (JSON.parse(this.cookieService.get(CookieNames.DELIVERED_ITEMS) || '[]') as DeliveredItem[]);
  }

  updateOrderedItems(item: StorageItem) {
    if (this.cookieService.get(CookieNames.ORDERED_ITEMS)) {
      const orderedItems: StorageItem[] = JSON.parse(this.cookieService.get(CookieNames.ORDERED_ITEMS)) as StorageItem[];
      orderedItems.push(item);
      this.cookieService.set(CookieNames.ORDERED_ITEMS, JSON.stringify(orderedItems));
    } else {
      this.cookieService.set(CookieNames.ORDERED_ITEMS, JSON.stringify([item]));
    }

  }

  saveOrderedItems(items: StorageItem[]) {
    this.cookieService.set(CookieNames.ORDERED_ITEMS, JSON.stringify(items));
  }

  getOrderedItems(): StorageItem[]{
    return (JSON.parse(this.cookieService.get(CookieNames.ORDERED_ITEMS) || '[]') as StorageItem[]);
  }
}