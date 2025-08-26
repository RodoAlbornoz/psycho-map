import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import { PsychologySubjects } from '../models/psychologySubjects.model';
import { PsychologySubjectsCorrelations } from '../models/psychologyCorrelations.model';

let subjectsPsychology: PsychologySubjects = new PsychologySubjects();
let subjectsCorrelationsPsychology: PsychologySubjectsCorrelations = new PsychologySubjectsCorrelations();

@Component({
	selector: 'app-network-subjects',
	standalone: true,
	imports: [NgxGraphModule],
	templateUrl: './network-subjects.html',
	styleUrls: ['./network-subjects.css']
})

export class NetworkSubjectsComponent {
	nodes = subjectsPsychology.mapSubjectsToNodes();
	links = subjectsCorrelationsPsychology.mapCorrelationsToLinks();
}