import { SubjectsDegree } from "./subjectsDegree.model";

export class PsychologySubjects implements SubjectsDegree {  
    cbcSubjects: { materia: string, cargaHorariaSemanal: number }[] = [];
    cicloGeneralSubjects: { materia: string, cargaHorariaSemanal: number }[] = [];
    requisitoIdioma: { materia: string, duracion: string, cargaHorariaSemanal: number }[] = [];
    cicloProfesionalSubjects: { materia: string, duracion: string, cargaHorariaSemanal: number }[] = [];
}