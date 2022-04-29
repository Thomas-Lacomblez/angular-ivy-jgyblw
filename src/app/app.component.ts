import { Component, VERSION, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil/appareil.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor() { }
}
