import { Component } from '@angular/core';
import { NgxGraphModule } from '@swimlane/ngx-graph';

import subjects from '../../data/Lic-Psicologia/subjects.json';
//import correlations from '../../data/Lic-Psicologia/correlations.json';
import { PsychologySubjects } from '../models/psychologySubjects.model';
//import { PsychologySubjectsCorrelations } from '../models/psychologyCorrelations.model';

let subjectsPsychology: PsychologySubjects = new PsychologySubjects();
subjectsPsychology.cbcSubjects = subjects.cbc;
subjectsPsychology.cicloGeneralSubjects = subjects.materiasCarrera;
/*
subjectsPsychology.requisitoIdioma = subjects.requisitoIdioma;
subjectsPsychology.cicloProfesionalSubjects = subjects.cicloProfesional;
*/

/*
let subjectsCorrelationsPsychology: PsychologySubjectsCorrelations = new PsychologySubjectsCorrelations();
subjectsCorrelationsPsychology.cbcCorrelations = correlations.cbc;
subjectsCorrelationsPsychology.cicloGeneralCorrelations = correlations.correlativasCarrera;
subjectsCorrelationsPsychology.requisitoIdioma = correlations.requisitoIdioma;
subjectsCorrelationsPsychology.cicloProfesionalCorrelations = correlations.cicloFormacionProfesional;
*/

@Component({
  selector: 'app-network-subjects',
  standalone: true,
  imports: [NgxGraphModule],
  templateUrl: './network-subjects.html',
  styleUrls: ['./network-subjects.css']
})

export class NetworkSubjectsComponent {
  nodes = subjectsPsychology.cicloGeneralSubjects.map(subject => ({ id: subject.materia, label: subject.materia }));
  // links = subjectsCorrelationsPsychology.cicloGeneralCorrelations.map(correlations => ({ source: correlations.correlativas, target: correlations.correlativas }));
}