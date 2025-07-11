export interface SubjectsCorrelations {
	cbcCorrelations: { materia: string, correlativas: string[] | null }[];
	cicloGeneralCorrelations: { materia: string, correlativas: string[] | null }[];
	requisitoIdioma: { materia: string, correlativas: string[] | null }[];
	cicloProfesionalCorrelations: { materia: string, correlativas: string[] | null }[];
}