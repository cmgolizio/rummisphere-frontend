// "use client";

// import { DndContext } from "@dnd-kit/core";

// import GameBoard from "@/components/GameBoard";
// import PlayerTray from "@/components/PlayerTray";

// export default function Home() {
//   return (
//     <main className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white'>
//       <h1 className='text-3xl font-bold mb-4'>RummiSphere</h1>
//       <DndContext>
//         <GameBoard />
//         <PlayerTray />
//       </DndContext>
//     </main>
//   );
// }
"use client";

import React from "react";
import GameBoard from "@/components/GameBoard";
import PlayerTray from "@/components/PlayerTray";

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white'>
      <h1 className='text-3xl font-bold mb-4'>Rummikub Prototype</h1>
      <GameBoard />
      <PlayerTray />
    </main>
  );
}
