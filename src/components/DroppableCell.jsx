"use client";

export default function DroppableCell({ isHovered }) {
  return (
    <div
      className={`w-[60px] h-[60px] border-2 rounded-md transition-colors duration-150 ${
        isHovered ? "border-yellow-400 bg-yellow-100" : "border-gray-600"
      }`}
    />
  );
}
