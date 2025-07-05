export const nodes = [
    { id: '1', label: 'Psicologia general',  },
    { id: '2', label: 'Estadistica' },
    { id: '3', label: 'Psicologia social' },
    { id: '4', label: 'Psicologia y epistemología genetica' },
    { id: '5', label: 'Psicoanalisis Freud' },
    { id: '6', label: 'Neurofisiologia' },
    { id: '7', label: 'Historia de la psicologia' },
    { id: '8', label: 'Metodologia de la investigacion' },
    { id: '9', label: 'Salud publica y salud mental' },
    { id: '10', label: 'Teoria y tecnica de grupos' },
    { id: '11', label: 'Psicologia evolutiva niñez' },
    { id: '12', label: 'Psicologia evolutiva adolescencia' },
    /*
    { id: '13', label: 'Psicopatologia' },
    { id: '14', label: 'Teoria y tecnica de exploracion y diagnostico psicologico. Modulo I' },
    { id: '15', label: 'Teoria y tecnica de exploracion y diagnostico psicologico. Modulo II' },
     */
];

export const links = [
    { source: '1', target: '7', color: 'white' },
    { source: '3', target: '7', color: 'white' },
    { source: '1', target: '8', color: 'white' },
    { source: '2', target: '8', color: 'white' },
    { source: '3', target: '9', color: 'white' },
    { source: '8', target: '9', color: 'white' },
    { source: '3', target: '10', color: 'white' },
    { source: '5', target: '10', color: 'white' },
    { source: '4', target: '11', color: 'white' },
    { source: '5', target: '11', color: 'white' },
    { source: '4', target: '12', color: 'white' },
    { source: '5', target: '12', color: 'white' },
    { source: '11', target: '12', color: 'white' },
    /*
    { source: '6', target: '13' },
    { source: '12', target: '13' },
    { source: '12', target: '14' },
    { source: '13', target: '14' },
    { source: '12', target: '15' },
    { source: '13', target: '15' },
    { source: '14', target: '15' },
    */
];