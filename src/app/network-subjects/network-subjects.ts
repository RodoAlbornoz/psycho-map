import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph'; // Importar el módulo necesario

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgxGraphModule],
  template: `
    <ngx-graph
      [links]="links"
      [nodes]="nodes"
      [layout]="'dagre'"
      [draggingEnabled]="true"
      [zoomLevel]="1"
      [enableZoom]="true"
      [autoCenter]="true"
      [autoZoom]="true">
    </ngx-graph>
  `,
  styleUrls: ['./network-subjects.css']
})
export class NetworkSubjectsComponent {
  nodes = [
    { id: 'n1', label: 'Nodo 1' },
    { id: 'n2', label: 'Nodo 2' },
    { id: 'n3', label: 'Nodo 3' }
  ];

  links = [
    { source: 'n1', target: 'n2', label: 'Conexión A' },
    { source: 'n1', target: 'n3', label: 'Conexión B' }
  ];
}