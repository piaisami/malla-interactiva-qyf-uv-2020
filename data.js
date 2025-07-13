// Todos los ramos, créditos, prerrequisitos y semestre
  const ramos = [
  // Primer año
  { id: "quimica_general", nombre: "Química General", creditos: 4, requiere: [], year: 1, sem: 1 },
  { id: "matematicas", creditos: 8, requiere: [], year: 1, sem: 1 },
  { id: "biologia_celular", creditos: 6, requiere: [], year: 1, sem: 1 },
  { id: "intro_lab", creditos: 3, requiere: [], year: 1, sem: 1 },
  { id: "intro_qf", creditos: 6, requiere: [], year: 1, sem: 1 },
  { id: "anatomia", creditos: 3, requiere: [], year: 1, sem: 1 },

  { id: "quim_organic_i", creditos: 6, requiere: ["quimica_general", "intro_lab"], year: 1, sem: 2 },
  { id: "fisicoquimica", creditos: 8, requiere: ["quimica_general", "matematicas"], year: 1, sem: 2 },
  { id: "calculo", creditos: 4, requiere: ["matematicas"], year: 1, sem: 2 },
  { id: "botanica", creditos: 4, requiere: ["biologia_celular"], year: 1, sem: 2 },
  { id: "bioestadistica", creditos: 4, requiere: ["matematicas"], year: 1, sem: 2 },
  { id: "tnl", creditos: 2, requiere: [], year: 1, sem: 2 },

  // Segundo año
  { id: "quim_organic_ii", creditos: 8, requiere: ["quim_organic_i"], year: 2, sem: 1 },
  { id: "quim_analitica", creditos: 8, requiere: ["fisicoquimica"], year: 2, sem: 1 },
  { id: "fisiologia_i", creditos: 6, requiere: ["biologia_celular", "anatomia"], year: 2, sem: 1 },
  { id: "tni", creditos: 2, requiere: [], year: 2, sem: 1 },
  { id: "bioquimica", creditos: 6, requiere: ["biologia_celular", "quim_organic_i"], year: 2, sem: 1 },

  { id: "farmacognosia", creditos: 6, requiere: ["botanica", "quim_organic_ii"], year: 2, sem: 2 },
  { id: "analisis_instr", creditos: 8, requiere: ["quim_analitica"], year: 2, sem: 2 },
  { id: "oper_unit", creditos: 5, requiere: ["fisicoquimica"], year: 2, sem: 2 },
  { id: "fisiologia_ii", creditos: 4, requiere: ["fisiologia_i"], year: 2, sem: 2 },
  { id: "administracion", creditos: 5, requiere: ["matematicas", "tnl"], year: 2, sem: 2 },
  { id: "intro_qfarm", creditos: 2, requiere: ["quim_organic_ii"], year: 2, sem: 2 },

  // Tercer año
  { id: "etica", creditos: 2, requiere: ["tnl"], year: 3, sem: 1 },
  { id: "admin_rrhh", creditos: 3, requiere: ["administracion"], year: 3, sem: 1 },
  { id: "bio_molecular", creditos: 4, requiere: ["bioquimica"], year: 3, sem: 1 },
  { id: "fisiopato", creditos: 4, requiere: ["fisiologia_ii"], year: 3, sem: 1 },
  { id: "quimfarm_i", creditos: 6, requiere: ["intro_qfarm", "fisiologia_ii"], year: 3, sem: 1 },
  { id: "electivo_i", creditos: 2, requiere: [], year: 3, sem: 1 },
  { id: "microbiologia", creditos: 5, requiere: ["bioquimica"], year: 3, sem: 1 },
  { id: "legislacion", creditos: 2, requiere: ["administracion"], year: 3, sem: 1 },

  { id: "biofarmacia", creditos: 8, requiere: ["analisis_instr", "fisiologia_ii"], year: 3, sem: 2 },
  { id: "farmacologia_i", creditos: 7, requiere: ["quimfarm_i", "fisiopato"], year: 3, sem: 2 },
  { id: "inmunologia", creditos: 4, requiere: ["bio_molecular", "fisiopato"], year: 3, sem: 2 },
  { id: "quimfarm_ii", creditos: 6, requiere: ["quimfarm_i", "microbiologia"], year: 3, sem: 2 },
  { id: "pp_i", creditos: 7, requiere: ["etica", "admin_rrhh", "legislacion"], year: 3, sem: 2 },

  // Cuarto año
  { id: "tecnol_farm_i", creditos: 7, requiere: ["oper_unit", "biofarmacia"], year: 4, sem: 1 },
  { id: "farmacologia_ii", creditos: 8, requiere: ["farmacologia_i"], year: 4, sem: 1 },
  { id: "quim_fisio_pat", creditos: 5, requiere: ["inmunologia"], year: 4, sem: 1 },
  { id: "salud_publica", creditos: 4, requiere: ["etica"], year: 4, sem: 1 },
  { id: "quim_alimentos", creditos: 4, requiere: ["analisis_instr"], year: 4, sem: 1 },
  { id: "tip1", creditos: 2, requiere: ["farmacologia_i", "pp_i"], year: 4, sem: 1 },

  { id: "tecnol_farm_ii", creditos: 7, requiere: ["tecnol_farm_i", "biofarmacia"], year: 4, sem: 2 },
  { id: "farm_asistencial", creditos: 3, requiere: ["farmacologia_ii"], year: 4, sem: 2 },
  { id: "metodologia_invest", creditos: 2, requiere: [], creditos_requiere: 178, year: 4, sem: 2 },
  { id: "nutricion", creditos: 4, requiere: ["quim_fisio_pat", "quim_alimentos"], year: 4, sem: 2 },
  { id: "tip2", creditos: 2, requiere: ["tip1"], year: 4, sem: 2 },

  // Quinto año
  { id: "farmacov", creditos: 2, requiere: ["farm_asistencial", "farmacologia_ii"], year: 5, sem: 1 },
  { id: "farm_clinica", creditos: 4, requiere: ["farm_asistencial", "metodologia_invest"], year: 5, sem: 1 },
  { id: "toxicologia", creditos: 4, requiere: ["farmacologia_ii"], year: 5, sem: 1 },
  { id: "quimfarm_iii", creditos: 5, requiere: ["quimfarm_ii"], year: 5, sem: 1 },
  { id: "electivo_ii", creditos: 2, requiere: [], year: 5, sem: 1 },

  { id: "ui_internado_i", creditos: 5, requiere: ["farm_clinica", "farmacov", "quimfarm_iii"], year: 5, sem: 2 },
];
