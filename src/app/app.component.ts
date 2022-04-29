import { Component, VERSION, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  isAuth = false;

  appareils: any[];

  lastUpdate = new Promise<Date>( (resolve, reject) => {
    const date = new Date();

    setTimeout( () => {
      resolve(date);
    }, 2000)
  });

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  constructor(private appareilService: AppareilService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
}
