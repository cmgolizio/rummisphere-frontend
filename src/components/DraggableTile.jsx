"use client";

import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableTile({ tile }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: tile.id,
    });

  const colors = {
    red: "#e74c3c",
    blue: "#3498db",
    yellow: "#f1c40f",
    black: "#2c3e50",
  };

  const style = {
    transform: CSS.Translate.toString(transform),
    left: tile.x,
    top: tile.y,
    zIndex: isDragging ? 50 : 10,
    backgroundColor: colors[tile.color],
    transition: isDragging ? "none" : "left 0.2s ease, top 0.2s ease", // smooth snap
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className='absolute w-[60px] h-[60px] rounded-md shadow-md font-bold flex items-center justify-center text-black cursor-grab active:cursor-grabbing'
    >
      {tile.number}
    </div>
  );
}
