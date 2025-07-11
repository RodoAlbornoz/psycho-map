import { SubjectsDegree } from "./subjectsDegree.model";

export class occupationalTherapySubjects implements SubjectsDegree {  
    cbcSubjects: { materia: string, cargaHorariaSemanal: number }[] = [];
    cicloGeneralSubjects: { materia: string, cargaHorariaSemanal: number }[] = [];
    requisitoIdioma: { materia: string, duracion: string, cargaHorariaSemanal: number }[] = [];
    cicloProfesionalSubjects: { materia: string, duracion: string, cargaHorariaSemanal: number }[] = [];

    mapSubjectsToNodes() {
        return [
            ...this.cicloGeneralSubjects.map(subject => ({ id: subject.materia, label: subject.materia })), 
            ...this.cbcSubjects.map(subject => ({ id: subject.materia, label: subject.materia }))
        ]
    }
}