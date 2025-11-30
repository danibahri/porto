import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  { id: 1, text: "React", color: "bg-blue-500" },
  { id: 2, text: "Tailwind", color: "bg-cyan-500" },
  { id: 3, text: "Framer Motion", color: "bg-purple-500" },
  { id: 4, text: "Node.js", color: "bg-green-500" },
];

const CardSwap = () => {
  const [items, setItems] = useState(cards);

  const moveToEnd = (index) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(index, 1);
    newItems.push(movedItem);
    setItems(newItems);
  };

  return (
    <section className="py-20 flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-white mb-10">Tech Stack</h2>
      <div className="relative w-64 h-80">
        <AnimatePresence>
          {items.map((card, index) => {
            return (
              <motion.div
                key={card.id}
                className={`absolute inset-0 rounded-2xl ${card.color} flex items-center justify-center text-2xl font-bold text-white shadow-xl cursor-pointer border border-white/20`}
                style={{ zIndex: items.length - index }}
                initial={{ scale: 1, y: 0 }}
                animate={{
                  scale: 1 - index * 0.05,
                  y: index * 15,
                  rotate: index % 2 === 0 ? index * 2 : index * -2,
                }}
                exit={{ x: 200, opacity: 0 }}
                onClick={() => moveToEnd(index)}
                whileHover={{ scale: 1.05 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 100) {
                    moveToEnd(index);
                  }
                }}
              >
                {card.text}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <p className="mt-8 text-gray-400 text-sm">Click or drag to swap</p>
    </section>
  );
};

export default CardSwap;
