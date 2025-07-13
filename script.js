document.addEventListener("DOMContentLoaded", function () {
  const malla = document.getElementById("malla");
  const creditosText = document.getElementById("creditos-acumulados");
  let creditosTotales = 0;

  function actualizarCreditos() {
    creditosText.textContent = `Créditos acumulados: ${creditosTotales}`;
  }

  function puedeDesbloquear(ramo, ramosAprobados, creditosAcumulados) {
    if (ramo.requisitos.length === 0 && !ramo.creditosNecesarios) return true;
    const requisitosOK = ramo.requisitos.every(id => ramosAprobados.includes(id));
    const creditosOK = !ramo.creditosNecesarios || creditosAcumulados >= ramo.creditosNecesarios;
    return requisitosOK && creditosOK;
  }

  function celebrar() {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  const ramosAprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

  data.forEach((anio, i) => {
    const yearDiv = document.createElement("div");
    yearDiv.classList.add("year");

    anio.forEach((semestre, j) => {
      const semDiv = document.createElement("div");
      semDiv.classList.add("semestre");

      semestre.forEach(ramo => {
        const div = document.createElement("div");
        div.classList.add("ramo", ramo.clase);
        div.textContent = `${ramo.nombre} (${ramo.creditos})`;
        div.dataset.id = ramo.id;

        if (ramosAprobados.includes(ramo.id)) {
          div.classList.add("completado");
        }

        div.addEventListener("click", () => {
          const idx = ramosAprobados.indexOf(ramo.id);
          if (idx === -1 && puedeDesbloquear(ramo, ramosAprobados, creditosTotales)) {
            ramosAprobados.push(ramo.id);
            creditosTotales += ramo.creditos;
            div.classList.add("completado");

            const totalSemestre = semestre.length;
            const completados = semestre.filter(r => ramosAprobados.includes(r.id)).length + 1;
            if (completados >= totalSemestre) celebrar();

          } else if (idx !== -1) {
            ramosAprobados.splice(idx, 1);
            creditosTotales -= ramo.creditos;
            div.classList.remove("completado");
          }

          localStorage.setItem("ramosAprobados", JSON.stringify(ramosAprobados));
          actualizarCreditos();
        });

        semDiv.appendChild(div);
      });

      yearDiv.appendChild(semDiv);
    });

    malla.appendChild(yearDiv);
  });

  creditosTotales = data
    .flat(2)
    .filter(r => ramosAprobados.includes(r.id))
    .reduce((acc, r) => acc + r.creditos, 0);

  actualizarCreditos();
});
