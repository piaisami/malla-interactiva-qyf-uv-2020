const malla = document.getElementById("malla");
const creditosInfo = document.getElementById("creditos-acumulados");
let aprobados = new Set(), creditos = 0;
const creditColorMap = {
  8: "#F94144",
  7: "#F3722C",
  6: "#F9844A",
  5: "#F9C74F",
  4: "#90BE6D",
  3: "#43AA8B",
  2: "#277DA1"
};
function colorRamo(cr, id) {
  if (/pp_[iI]/.test(id)) return "#9e0059";
  return creditColorMap[cr] || "#777";
}
function estaDes(r) {
  if(r.creditos_requiere && creditos<r.creditos_requiere) return false;
  return r.requiere.every(x=>aprobados.has(x));
}
function dibujar() {
  malla.innerHTML="";
  for(let y=1;y<=5;y++){
    for(let s=1;s<=2;s++){
      let col = document.createElement("div");
      col.className="semestre";
      col.innerHTML=`<h3>Año ${y} - Sem ${s}</h3>`;
      ramos.filter(r=>r.year===y&&r.sem===s)
        .forEach(r=>{
          let d=document.createElement("div");
          d.className="ramo";
          if(!estaDes(r)) d.classList.add("locked");
          if(aprobados.has(r.id)) d.classList.add("aprobado");
          d.style.background = colorRamo(r.creditos,r.id);
          d.textContent = r.nombre;
          let c=document.createElement("div");
          c.className="credits"; c.textContent=`${r.creditos} cr`;
          d.appendChild(c);
          d.onclick=()=>{
            if(d.classList.contains("locked")) return;
            if(aprobados.has(r.id)){
              aprobados.delete(r.id); creditos-=r.creditos;
            } else {
              aprobados.add(r.id); creditos+=r.creditos;
            }
            actualizar();
          };
          col.appendChild(d);
        });
      malla.appendChild(col);
    }
  }
  creditosInfo.textContent=`Créditos acumulados: ${creditos}`;
}
function actualizar(){
  dibujar();
  // Confeti si completaste un semestre
  for(let y=1;y<=5;y++){
    for(let s=1;s<=2;s++){
      let arr=ramos.filter(r=>r.year===y&&r.sem===s);
      if(arr.every(r=>aprobados.has(r.id))){
        confetti();
      }
    }
  }
}
dibujar();
