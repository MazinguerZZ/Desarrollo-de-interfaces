import React from "react";

/**
 * Componente Resumen: Muestra estadísticas del equipo
 * y valida las reglas
 */
const Resumen = ({
  equipo,
  contarJugadoresPorPos,
  cumpleMinimos,
  equipoValido,
  onConfirmar,
  onReset,
}) => {
  // Contadores por posición
  const nPOR = contarJugadoresPorPos("POR");
  const nDEF = contarJugadoresPorPos("DEF");
  const nMC = contarJugadoresPorPos("MC");
  const nDEL = contarJugadoresPorPos("DEL");

  return (
    <div>
      <h3>Resumen</h3>

      {/* Estadísticas del equipo */}
      <div id="resumen">
        <p>
          Jugadores: <b>{equipo.length}</b> / 11
        </p>
        <p>
          POR: {nPOR} | DEF: {nDEF} | MC: {nMC} | DEL: {nDEL}
        </p>
        <p>
          Mínimos:{" "}
          {cumpleMinimos() ? (
            <span className="ok">OK</span>
          ) : (
            <span className="bad">NO</span>
          )}
        </p>
        <p>
          Equipo válido:{" "}
          {equipoValido() ? (
            <span className="ok">SÍ</span>
          ) : (
            <span className="bad">NO</span>
          )}
        </p>
      </div>

      {/* Botones de acción */}
      <div style={{ marginTop: "20px" }}>
        <button
          id="confirmar"
          onClick={onConfirmar}
          disabled={!equipoValido()}
          style={{ marginRight: "10px" }}
        >
          Confirmar
        </button>

        <button id="reset" onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Resumen;
