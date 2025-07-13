const mallaDiv = document.getElementById("malla");
const creditosDiv = document.getElementById("creditos-acumulados");

let creditosAcumulados = 0;
const aprobados = new Set();

// Función para verificar si un ramo está desbloqueado
function estaDesbloqueado(ramo) {
  // Si el ramo requiere un mínimo de créditos acumulados
  if (ramo.creditos_requiere) {
    if (creditosAcumulados < ramo.creditos_requiere) return false;
  }
  // Verificar prerrequisitos
  for (const prereq of ramo.requiere) {
    if (!aprobados.has(prereq)) return false;
  }
  return true;
}

// Crear la UI agrupada por semestre
function mostrarMalla() {
  mallaDiv.innerHTML = "";

  // Agrupar ramos por semestre
  const semestres = {};
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });

  // Mostrar semestre por semestre
  for (const semestre of Object.keys(semestres)) {
    const titulo = document.createElement("div");
    titulo.className = "semestre-titulo";
    titulo.textContent = semestre;
    mallaDiv.appendChild(titulo);

    for (const ramo of semestres[semestre]) {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      ramoDiv.id = ramo.id;
      ramoDiv.textContent = ramo.nombre;

      const credSpan = document.createElement("div");
      credSpan.className = "creditos";
      credSpan.textContent = `${ramo.creditos} créditos`;
      ramoDiv.appendChild(credSpan);

      // Si está aprobado
      if (aprobados.has(ramo.id)) {
        ramoDiv.classList.add("aprobado");
      } else if (!estaDesbloqueado(ramo)) {
        ramoDiv.classList.add("locked");
      }

      ramoDiv.addEventListener("click", () => {
        if (aprobados.has(ramo.id)) {
          aprobados.delete(ramo.id);
          creditosAcumulados -= ramo.creditos;
        } else {
          if (!estaDesbloqueado(ramo)) {
            alert("Debes aprobar prerrequisitos o tener los créditos necesarios para desbloquear este ramo.");
            return;
          }
          aprobados.add(ramo.id);
          creditosAcumulados += ramo.creditos;
        }
        actualizarUI();
      });

      mallaDiv.appendChild(ramoDiv);
    }
  }
  creditosDiv.textContent = `Créditos acumulados: ${creditosAcumulados}`;
}

function actualizarUI() {
  mostrarMalla();
}

mostrarMalla();
