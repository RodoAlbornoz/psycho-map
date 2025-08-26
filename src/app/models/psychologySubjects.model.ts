import { SubjectsDegree } from "./subjectsDegree.model";

import subjects from '../../data/Lic-Psicologia/subjects.json';

export class PsychologySubjects implements SubjectsDegree {  
    cbcSubjects: { materia: string, cargaHorariaSemanal: number }[] = [];
    cicloGeneralSubjects: { materia: string, cargaHorariaSemanal: number }[] = [];
    requisitoIdioma: { materia: string, duracion: string, cargaHorariaSemanal: number }[] = [];
    //cicloProfesionalSubjects: { materia: string, duracion: string, cargaHorariaSemanal: number }[] = [];

    constructor() {
        this.cbcSubjects = subjects.cbc;
        this.cicloGeneralSubjects = subjects.materiasCarrera;
        this.requisitoIdioma = subjects.requisitoIdioma;
        //this.cicloProfesionalSubjects = subjects.cicloProfesional;
    }

    mapSubjectsToNodes() {
        return [
            ...this.cicloGeneralSubjects.map(subject => ({ id: subject.materia, label: subject.materia })), 
            ...this.cbcSubjects.map(subject => ({ id: subject.materia, label: subject.materia })),
            ...this.requisitoIdioma.map(subject => ({ id: subject.materia, label: subject.materia }))
        ]
    }
}