
function clasificarPresion() {
  let sistolica = parseInt(prompt("Ingrese presión sistólica:"));
  let diastolica = parseInt(prompt("Ingrese presión diastólica:"));
  let resultado = "";

  if (sistolica < 120 && diastolica < 80) resultado = "Normal";
  else if (sistolica < 130 && diastolica < 80) resultado = "Elevada";
  else if ((sistolica < 140 && diastolica < 90)) resultado = "HTA Grado 1";
  else resultado = "HTA Grado 2";

  let consejo = resultado === "Normal" ? " Mantenga hábitos saludables." : " Consulte a un médico.";
  document.getElementById("resultadoPresion").innerText =
    "Presión: " + sistolica + "/" + diastolica + " mmHg → " + resultado + "\n" + consejo;
}

function promedioTemperaturas() {
  let n = parseInt(prompt("¿Cuántos pacientes registrarás?"));
  let suma = 0;
  let maxTemp = 0;

  for (let i = 1; i <= n; i++) {
    let temp = parseFloat(prompt("Temperatura del paciente " + i + " (°C):"));
    suma += temp;
    if (temp > maxTemp) maxTemp = temp;
  }

  let promedio = suma / n;

  let clasificacion = promedio >= 38 ? " Promedio indica fiebre" : " Promedio normal";
  document.getElementById("resultadoTemperaturas").innerText =
    "Promedio de temperatura: " + promedio.toFixed(1) + " °C\n" +
    "Máxima registrada: " + maxTemp + " °C\n" +
    "Clasificación: " + clasificacion;
}

function contarFiebre() {
  let temperatura;
  let contador = 0;
  let maxTemp = 0;

  while (true) {
    temperatura = parseFloat(prompt("Ingrese temperatura (0 para terminar):"));
    if (temperatura === 0) break;
    if (temperatura >= 38) contador++;
    if (temperatura > maxTemp) maxTemp = temperatura;
  }

  let alerta = contador > 5 ? "Brote de fiebre detectado" : " Riesgo bajo";
  document.getElementById("resultadoFiebre").innerText =
    "Pacientes con fiebre (≥38°C): " + contador + "\n" +
    "Temperatura máxima registrada: " + maxTemp + " °C\n" +
    alerta;
}

function clasificarTriage() {
  let codigo = parseInt(prompt("Ingrese código TRIAGE (1-4):"));
  let categoria;
  let descripcion;

  switch (codigo) {
    case 1: categoria = "Rojo"; descripcion = "Emergencia inmediata"; break;
    case 2: categoria = "Amarillo"; descripcion = "Urgencia"; break;
    case 3: categoria = "Verde"; descripcion = "Atención diferida"; break;
    case 4: categoria = "Azul"; descripcion = "Consulta general"; break;
    default: categoria = "Código inválido"; descripcion = "";
  }

  let consejo = "";
  if (codigo === 1) consejo = "⏱ Atención inmediata requerida.";
  else if (codigo === 2) consejo = "⏱ Atención en menos de 30 minutos.";
  else if (codigo === 3) consejo = "⏱ Atención en menos de 2 horas.";
  else if (codigo === 4) consejo = "⏱ Atención programada.";

  document.getElementById("resultadoTriage").innerText =
    categoria + (descripcion ? " → " + descripcion : "") + "\n" + consejo;
}

function registrarSpO2() {
  let historial = [];
  let valor;

  do {
    valor = prompt("Ingrese saturación SpO2 (%) o 'no' para terminar:");
    if (!valor || valor.toLowerCase() === "no") break;

    let spo2 = parseFloat(valor);
    let mensaje = spo2 < 95 ? " Saturación baja" : "Saturación normal";
    historial.push(spo2 + "% → " + mensaje);

    document.getElementById("resultadoSpO2").innerText =
      historial.join("\n") + "\nTotal registros: " + historial.length;
  } while (true);
}
