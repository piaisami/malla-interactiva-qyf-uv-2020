// Todos los ramos, créditos, prerrequisitos y semestre
const ramos = [
  // PRIMER AÑO
  // Primer semestre
  { id: "quimica_general", nombre: "Química General", creditos: 4, requiere: [], semestre: "Primer Año - Primer Semestre" },
  { id: "matematicas", nombre: "Matemáticas", creditos: 8, requiere: [], semestre: "Primer Año - Primer Semestre" },
  { id: "biologia_celular", nombre: "Biología Celular", creditos: 6, requiere: [], semestre: "Primer Año - Primer Semestre" },
  { id: "intro_laboratorio", nombre: "Introducción al Laboratorio", creditos: 3, requiere: [], semestre: "Primer Año - Primer Semestre" },
  { id: "intro_quimica_farmacia", nombre: "Introducción a la Química y Farmacia", creditos: 6, requiere: [], semestre: "Primer Año - Primer Semestre" },
  { id: "anatomia", nombre: "Anatomía", creditos: 3, requiere: [], semestre: "Primer Año - Primer Semestre" },

  // Segundo semestre
  { id: "quimica_organica_i", nombre: "Química Orgánica I", creditos: 6, requiere: ["quimica_general", "intro_laboratorio"], semestre: "Primer Año - Segundo Semestre" },
  { id: "fisicoquimica", nombre: "Fisicoquímica", creditos: 8, requiere: ["quimica_general", "matematicas"], semestre: "Primer Año - Segundo Semestre" },
  { id: "calculo", nombre: "Cálculo", creditos: 4, requiere: ["matematicas"], semestre: "Primer Año - Segundo Semestre" },
  { id: "botanica", nombre: "Botánica", creditos: 4, requiere: ["biologia_celular"], semestre: "Primer Año - Segundo Semestre" },
  { id: "bioestadistica", nombre: "Bioestadística", creditos: 4, requiere: ["matematicas"], semestre: "Primer Año - Segundo Semestre" },
  { id: "tnl", nombre: "TNL", creditos: 2, requiere: [], semestre: "Primer Año - Segundo Semestre" },

  // SEGUNDO AÑO
  // Primer semestre
  { id: "quimica_organica_ii", nombre: "Química Orgánica II", creditos: 8, requiere: ["quimica_organica_i"], semestre: "Segundo Año - Primer Semestre" },
  { id: "quimica_analitica", nombre: "Química Analítica", creditos: 8, requiere: ["fisicoquimica"], semestre: "Segundo Año - Primer Semestre" },
  { id: "fisiologia_i", nombre: "Fisiología I", creditos: 6, requiere: ["biologia_celular", "anatomia"], semestre: "Segundo Año - Primer Semestre" },
  { id: "tni", nombre: "TNI", creditos: 2, requiere: [], semestre: "Segundo Año - Primer Semestre" },
  { id: "bioquimica", nombre: "Bioquímica", creditos: 6, requiere: ["biologia_celular", "quimica_organica_i"], semestre: "Segundo Año - Primer Semestre" },

  // Segundo semestre
  { id: "farmacognosia", nombre: "Farmacognosia", creditos: 6, requiere: ["botanica", "quimica_organica_ii"], semestre: "Segundo Año - Segundo Semestre" },
  { id: "analisis_instrumental", nombre: "Análisis Instrumental", creditos: 8, requiere: ["quimica_analitica"], semestre: "Segundo Año - Segundo Semestre" },
  { id: "operaciones_unitarias", nombre: "Operaciones Unitarias", creditos: 5, requiere: ["fisicoquimica"], semestre: "Segundo Año - Segundo Semestre" },
  { id: "fisiologia_ii", nombre: "Fisiología II", creditos: 4, requiere: ["fisiologia_i"], semestre: "Segundo Año - Segundo Semestre" },
  { id: "administracion", nombre: "Administración de Organizaciones", creditos: 5, requiere: ["matematicas", "tnl"], semestre: "Segundo Año - Segundo Semestre" },
  { id: "intro_quimica_farmaceutica", nombre: "Introducción a la química farmacéutica", creditos: 2, requiere: ["quimica_organica_ii"], semestre: "Segundo Año - Segundo Semestre" },

  // TERCER AÑO
  // Primer semestre
  { id: "etica", nombre: "Ética", creditos: 2, requiere: ["tnl"], semestre: "Tercer Año - Primer Semestre" },
  { id: "administracion_rrhh", nombre: "Administración de Recursos Humanos", creditos: 3, requiere: ["administracion"], semestre: "Tercer Año - Primer Semestre" },
  { id: "biologia_molecular", nombre: "Biología Molecular", creditos: 4, requiere: ["bioquimica"], semestre: "Tercer Año - Primer Semestre" },
  { id: "fisiopatologia", nombre: "Fisiopatología", creditos: 4, requiere: ["fisiologia_ii"], semestre: "Tercer Año - Primer Semestre" },
  { id: "quimica_farmaceutica_i", nombre: "Química Farmacéutica I", creditos: 6, requiere: ["intro_quimica_farmaceutica", "fisiologia_ii"], semestre: "Tercer Año - Primer Semestre" },
  { id: "electivo_i", nombre: "Electivo I", creditos: 2, requiere: [], semestre: "Tercer Año - Primer Semestre" },
  { id: "microbiologia", nombre: "Microbiología", creditos: 5, requiere: ["bioquimica"], semestre: "Tercer Año - Primer Semestre" },
  { id: "legislacion", nombre: "Legislación Farmacéutica", creditos: 2, requiere: ["administracion"], semestre: "Tercer Año - Primer Semestre" },

  // Segundo semestre
  { id: "biofarmacia", nombre: "Biofarmacia", creditos: 8, requiere: ["analisis_instrumental", "fisiologia_ii"], semestre: "Tercer Año - Segundo Semestre" },
  { id: "farmacologia_i", nombre: "Farmacología I", creditos: 7, requiere: ["quimica_farmaceutica_i", "fisiopatologia"], semestre: "Tercer Año - Segundo Semestre" },
  { id: "inmunologia", nombre: "Inmunología", creditos: 4, requiere: ["biologia_molecular", "fisiopatologia"], semestre: "Tercer Año - Segundo Semestre" },
  { id: "quimica_farmaceutica_ii", nombre: "Química Farmacéutica II", creditos: 6, requiere: ["quimica_farmaceutica_i", "microbiologia"], semestre: "Tercer Año - Segundo Semestre" },
  { id: "practica_profesional_i", nombre: "Práctica Profesional I", creditos: 7, requiere: ["etica", "administracion_rrhh", "legislacion"], semestre: "Tercer Año - Segundo Semestre" },

  // CUARTO AÑO
  // Primer semestre
  { id: "tecnologia_farmaceutica_i", nombre: "Tecnología Farmacéutica I", creditos: 7, requiere: ["operaciones_unitarias", "biofarmacia"], semestre: "Cuarto Año - Primer Semestre" },
  { id: "farmacologia_ii", nombre: "Farmacología II", creditos: 8, requiere: ["farmacologia_i"], semestre: "Cuarto Año - Primer Semestre" },
  { id: "quimica_fisiologica_patologica", nombre: "Química Fisiológica y Patológica", creditos: 5, requiere: ["inmunologia"], semestre: "Cuarto Año - Primer Semestre" },
  { id: "salud_publica", nombre: "Salud Pública", creditos: 4, requiere: ["etica"], semestre: "Cuarto Año - Primer Semestre" },
  { id: "quimica_de_alimentos", nombre: "Química de Alimentos", creditos: 4, requiere: ["analisis_instrumental"], semestre: "Cuarto Año - Primer Semestre" },
  { id: "tip1", nombre: "TIP1", creditos: 2, requiere: ["farmacologia_i", "practica_profesional_i"], semestre: "Cuarto Año - Primer Semestre" },

  // Segundo semestre
  { id: "tecnologia_farmaceutica_ii", nombre: "Tecnología Farmacéutica II", creditos: 7, requiere: ["tecnologia_farmaceutica_i", "biofarmacia"], semestre: "Cuarto Año - Segundo Semestre" },
  { id: "farmacia_asistencial", nombre: "Farmacia Asistencial", creditos: 3, requiere: ["farmacologia_ii"], semestre: "Cuarto Año - Segundo Semestre" },
  { id: "metodologia_investigacion", nombre: "Metodología de la Investigación", creditos: 2, requiere: [], creditos_requiere: 178, semestre: "Cuarto Año - Segundo Semestre" },
  { id: "nutricion", nombre: "Nutrición", creditos: 4, requiere: ["quimica_fisiologica_patologica", "quimica_de_alimentos"], semestre: "Cuarto Año - Segundo Semestre" },
  { id: "tip2", nombre: "TIP2", creditos: 2, requiere: ["tip1"], semestre: "Cuarto Año - Segundo Semestre" },

  // QUINTO AÑO
  // Primer semestre
  { id: "farmacovigilancia", nombre: "Farmacovigilancia", creditos: 2, requiere: ["farmacia_asistencial", "farmacologia_ii"], semestre: "Quinto Año - Primer Semestre" },
  { id: "farmacia_clinica", nombre: "Farmacia Clínica", creditos: 4, requiere: ["farmacia_asistencial", "metodologia_investigacion"], semestre: "Quinto Año - Primer Semestre" },
  { id: "toxicologia", nombre: "Toxicología", creditos: 4, requiere: ["farmacologia_ii"], semestre: "Quinto Año - Primer Semestre" },
  { id: "quimica_farmaceutica_iii", nombre: "Química Farmacéutica III", creditos: 5, requiere: ["quimica_farmaceutica_ii"], semestre: "Quinto Año - Primer Semestre" },
  { id: "electivo_ii", nombre: "Electivo II", creditos: 2, requiere: [], semestre: "Quinto Año - Primer Semestre" },

  // Segundo semestre
  { id: "ui_internado_i", nombre: "UI / Internado I", creditos: 5, requiere: ["farmacia_clinica", "farmacovigilancia", "quimica_farmaceutica_iii"], semestre: "Quinto Año - Segundo Semestre" },
];
