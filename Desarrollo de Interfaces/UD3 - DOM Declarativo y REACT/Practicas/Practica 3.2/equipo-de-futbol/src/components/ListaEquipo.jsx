import React from "react";

/**
 * Componente ListaEquipo: Muestra la lista de jugadores seleccionados
 * con opción para borrar cada uno
 */
const ListaEquipo = ({ equipo, onBorrarJugador, onOrdenar }) => {
  return (
    <div>
      <h3>Convocados</h3>

      {/* Botón para ordenar el equipo */}
      <button id="ordenar" onClick={onOrdenar} style={{ marginBottom: "15px" }}>
        Ordenar
      </button>

      {/* Lista de jugadores */}
      <ul id="lista">
        {equipo.map((jugador, index) => (
          <li key={`${jugador.nombre}-${index}`}>
            {jugador.nombre}
            <span className="pos">{jugador.pos}</span>
            <button
              onClick={() => onBorrarJugador(index)}
              style={{ marginLeft: "10px" }}
            >
              Borrar
            </button>
          </li>
        ))}
      </ul>

      {/* Mensaje si no hay jugadores */}
      {equipo.length === 0 && (
        <p style={{ fontStyle: "italic", color: "#666" }}>
          No hay jugadores seleccionados
        </p>
      )}
    </div>
  );
};

export default ListaEquipo;
