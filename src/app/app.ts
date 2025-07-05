import { Component } from '@angular/core';
import { NetworkSubjectsComponent } from './network-subjects/network-subjects';

@Component({
  selector: 'app-root',
  imports: [NetworkSubjectsComponent],
  template: `<app-network-subjects></app-network-subjects>`,
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'psycho-map';
}
