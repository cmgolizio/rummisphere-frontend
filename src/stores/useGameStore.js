// "use client";

// import { create } from "zustand";
// import { devtools } from "zustand/middleware";

// export const useGameStore = create(
//   devtools((set, get) => ({
//     tiles: [
//       { id: "1", color: "red", number: 10, x: 0, y: 0, owner: "board" },
//       { id: "2", color: "blue", number: 7, x: 60, y: 0, owner: "board" },
//       { id: "3", color: "yellow", number: 3, x: 0, y: 0, owner: "player" },
//     ],
//     gridSize: 60,

//     updateTilePosition: (id, x, y, owner = "board") => {
//       const { tiles } = get();
//       const updated = tiles.map((t) =>
//         t.id === id ? { ...t, x, y, owner } : t
//       );
//       set({ tiles: updated });
//     },

//     snapToGrid: (x, y) => {
//       const grid = get().gridSize;
//       return {
//         x: Math.round(x / grid) * grid,
//         y: Math.round(y / grid) * grid,
//       };
//     },
//   }))
// );

"use client";

import { create } from "zustand";
import { shallow } from "zustand/shallow";

export const useGameStore = create((set, get) => ({
  // Tiles state
  tiles: [
    { id: "1", color: "red", number: 10, x: 0, y: 0, owner: "board" },
    { id: "2", color: "blue", number: 7, x: 60, y: 0, owner: "board" },
    { id: "3", color: "yellow", number: 3, x: 0, y: 0, owner: "player" },
  ],

  gridSize: 60, // pixels

  // --- Actions ---
  moveTile: (id, x, y) =>
    set((state) => ({
      tiles: state.tiles.map((t) => (t.id === id ? { ...t, x, y } : t)),
    })),

  snapToGrid: (x, y) => {
    const grid = get().gridSize;
    return { x: Math.round(x / grid) * grid, y: Math.round(y / grid) * grid };
  },
}));
