// Datos de jugadores y reglas del equipo
export const jugadoresPorPos = {
  POR: ["Unai Simon", "David Raya", "Joan García"],
  DEF: [
    "Cubarsí",
    "Marc Pubill",
    "Pedro Porro",
    "Huijsen",
    "Cucurella",
    "Carvajal",
    "Asencio",
    "Grimaldo",
  ],
  MC: [
    "Rodri",
    "Pedri",
    "Álex Baena",
    "Isco",
    "Fabián",
    "Mikel Merino",
    "Zubimendi",
    "Olmo",
  ],
  DEL: [
    "Mikel Oyarzabal",
    "Nico Williams",
    "Lamine Yamal",
    "Ferran",
    "Yeremay",
    "Morata",
  ],
};

export const posiciones = [
  { value: "POR", label: "PORTERO" },
  { value: "DEF", label: "DEFENSA" },
  { value: "MC", label: "MEDIO CAMPISTA" },
  { value: "DEL", label: "DELANTERO" },
];

export const maxJugadoresPorPos = { POR: 1, DEF: 5, MC: 5, DEL: 4 };
export const minJugadoresPorPos = { POR: 1, DEF: 2, MC: 2, DEL: 1 };
