import { Injectable } from '@angular/core';

@Injectable()
export class AppareilService {

  appareils = [
    { name: 'Machine à laver', status: 'éteint' },
    { name: 'Frigo', status: 'allumé' },
    { name: 'Lave vaisselle', status: 'éteint' }
  ];

  switchOnAll() {
    for(let appareil of this.appareils)
      appareil.status = 'allumé';
  }
  switchOffAll() {
    for(let appareil of this.appareils)
      appareil.status = 'éteint';
  }

  constructor() { }

}