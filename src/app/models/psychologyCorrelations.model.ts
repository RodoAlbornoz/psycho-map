import { SubjectsCorrelations } from "./subjectsCorrelations.model";

type PsychologyCorrelationsJson = {
  cbc: { materia: string; correlativas: string[] | null }[];
  correlativasCarrera: { materia: string; correlativas: string[] | null }[];
  requisitoIdioma: { materia: string; correlativas: string[] | null }[];
};

import correlationsJson from '../../data/Lic-Psicologia/correlations.json';
const correlations = correlationsJson as PsychologyCorrelationsJson;

export class PsychologySubjectsCorrelations implements SubjectsCorrelations {  
	cbcCorrelations: { materia: string, correlativas: string[] | null }[] = [];
	cicloGeneralCorrelations: { materia: string, correlativas: string[] | null }[] = [];
	requisitoIdioma: { materia: string, correlativas: string[] | null }[] = [];
	//cicloProfesionalCorrelations: { materia: string, correlativas: string[] | null}[] = [];

	constructor() {
		this.cbcCorrelations = correlations.cbc;
		this.cicloGeneralCorrelations = correlations.correlativasCarrera;
		this.requisitoIdioma = correlations.requisitoIdioma;
		//this.cicloProfesionalCorrelations = correlations.cicloFormacionProfesional;
	}

	mapCorrelationsToLinks() {
		return [
			...this.cicloGeneralCorrelations
				.flatMap(correlations =>
					correlations.correlativas?.map(correlativa => ({
						source: correlativa,
						target: correlations.materia
					})) ?? []
				),
 
			...this.requisitoIdioma
				.flatMap(correlations =>
					correlations.correlativas?.map(correlativa => ({
						source: correlativa,
						target: correlations.materia
					})) ?? []
				),
		]
	}
}