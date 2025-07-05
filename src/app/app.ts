import { Component } from '@angular/core';
import { NetworkSubjectsComponent } from './network-subjects/network-subjects';

@Component({
  selector: 'app-root',
  imports: [NetworkSubjectsComponent],
  template: `<app-home></app-home>`,
  standalone: true,
  styleUrl: './app.css'
})
export class App {
  protected title = 'psycho-map';
}
