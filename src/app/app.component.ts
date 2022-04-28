import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  isAuth = false;

  appareils = [
    { name: 'Machine à laver', status: 'éteint' },
    { name: 'Frigo', status: 'allumé' },
    { name: 'Lave vaisselle', status: 'éteint' }
  ];

  constructor() {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }
  onAllumer() {
    console.log('tout allumer ! ');
  }
}
