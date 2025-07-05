import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { nodes, links } from './data';

@Component({
  selector: 'app-network-subjects',
  standalone: true,
  imports: [NgxGraphModule],
  templateUrl: './network-subjects.html',
  styleUrls: ['./network-subjects.css']
})

export class NetworkSubjectsComponent {
  nodes = nodes;
  links = links;
}