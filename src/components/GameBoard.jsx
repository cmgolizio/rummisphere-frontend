"use client";

import React from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
  DragOverlay,
} from "@dnd-kit/core";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { useGameStore } from "@/stores/useGameStore";
import DraggableTile from "./DraggableTile";
import DroppableCell from "./DroppableCell";

export default function GameBoard() {
  const tiles = useGameStore((s) => s.tiles);
  const moveTile = useGameStore((s) => s.moveTile);
  const snapToGrid = useGameStore((s) => s.snapToGrid);
  const gridSize = useGameStore((s) => s.gridSize);

  const sensors = useSensors(useSensor(PointerSensor));

  const cols = 14;
  const rows = 4;
  const cells = cols * rows;

  // Highlight hovered cell
  const [hoveredCell, setHoveredCell] = React.useState(null);

  const handleDragOver = ({ over }) => {
    if (!over) return;
    setHoveredCell(over.id);
  };

  const handleDragEnd = ({ active, delta }) => {
    const tile = tiles.find((t) => t.id === active.id);
    if (!tile) return;

    const newX = tile.x + delta.x;
    const newY = tile.y + delta.y;
    const { x, y } = snapToGrid(newX, newY);

    moveTile(tile.id, x, y);
    setHoveredCell(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]} // Prevent dragging outside board
    >
      <div
        className='relative bg-green-900 p-4 rounded-xl shadow-xl'
        style={{ width: cols * gridSize, height: rows * gridSize }}
      >
        {/* Grid cells */}
        <div
          className='grid gap-1'
          style={{
            gridTemplateColumns: `repeat(${cols}, ${gridSize}px)`,
            gridTemplateRows: `repeat(${rows}, ${gridSize}px)`,
          }}
        >
          {Array.from({ length: cells }).map((_, i) => (
            <DroppableCell key={i} isHovered={hoveredCell === i.toString()} />
          ))}
        </div>

        {/* Board tiles */}
        {tiles
          .filter((t) => t.owner === "board")
          .map((tile) => (
            <DraggableTile key={tile.id} tile={tile} />
          ))}
      </div>
    </DndContext>
  );
}
