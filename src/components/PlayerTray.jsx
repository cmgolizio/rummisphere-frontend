"use client";

import React from "react";
import { useShallow } from "zustand/react/shallow";

import { useGameStore } from "@/stores/useGameStore";
import DraggableTile from "./DraggableTile";

export default function PlayerTray() {
  // useShallow or useStore prevents unnecessary re-renders
  const tiles = useGameStore(
    useShallow((s) => s.tiles.filter((t) => t.owner === "player"))
  );

  return (
    <div className='flex gap-2 p-4 mt-6 bg-gray-800 rounded-lg justify-center'>
      {tiles.map((tile) => (
        <DraggableTile key={tile.id} tile={tile} />
      ))}
    </div>
  );
}
