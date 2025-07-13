const mallaDiv = document.getElementById("malla");
const creditosDiv = document.getElementById("creditos-acumulados");

let creditosAcumulados = 0;
const aprobados = new Set();

function estaDesbloqueado(ramo) {
  if (ramo.creditos_requiere && creditosAcumulados < ramo.creditos_requiere) return false;
  for (const prereq of ramo.requiere) {
    if (!aprobados.has(prereq)) return false;
  }
  return true;
}

function mostrarMalla() {
  mallaDiv.innerHTML = "";

  const semestres = {};
  ramos.forEach(ramo => {
    if (!semestres[ramo.semestre]) semestres[ramo.semestre] = [];
    semestres[ramo.semestre].push(ramo);
  });

  for (const semestre of Object.keys(semestres)) {
    const columna = document.createElement("div");
    columna.className = "semestre";

    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    for (const ramo of semestres[semestre]) {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      ramoDiv.id = ramo.id;
      ramoDiv.textContent = ramo.nombre;

      const cred = document.createElement("div");
      cred.className = "creditos";
      cred.textContent = `${ramo.creditos} créditos`;
      ramoDiv.appendChild(cred);

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
            alert("Debes aprobar prerrequisitos o tener los créditos necesarios.");
            return;
          }
          aprobados.add(ramo.id);
          creditosAcumulados += ramo.creditos;
        }
        actualizarUI();
      });

      columna.appendChild(ramoDiv);
    }

    mallaDiv.appendChild(columna);
  }

  creditosDiv.textContent = `Créditos acumulados: ${creditosAcumulados}`;
}

function actualizarUI() {
  mostrarMalla();
}

mostrarMalla();
