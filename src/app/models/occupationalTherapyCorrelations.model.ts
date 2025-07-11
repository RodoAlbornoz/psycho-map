import { SubjectsCorrelations } from "./subjectsCorrelations.model";

export class occupationalTherapyCorrelations implements SubjectsCorrelations {  
	cbcCorrelations: { materia: string, correlativas: string[] | null }[] = [];
	cicloGeneralCorrelations: { materia: string, correlativas: string[] | null }[] = [];
	requisitoIdioma: { materia: string, correlativas: string[] | null }[] = [];
	cicloProfesionalCorrelations: { materia: string, correlativas: string[] | null}[] = [];

	mapCorrelationsToLinks() {
		return this.cicloGeneralCorrelations
		.flatMap(correlations =>
			correlations.correlativas?.map(correlativa => ({
				source: correlativa,
				target: correlations.materia
			})) ?? []
		);
	}
}