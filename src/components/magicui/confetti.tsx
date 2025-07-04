"use client";

import confetti from "canvas-confetti";

import { Pointer } from "./pointer";
import { motion } from "motion/react";
import Image from "next/image";

let ButtonActive = true;

export function ConfettiSideCannons() {
  const handleClick = () => {
    if (!ButtonActive) {
      return;
    }
    ButtonActive = false;
    const end = Date.now() + 3 * 1000; // 3 segundos
    const scalar = 3;
    const unicorn = confetti.shapeFromText({ text: "❄️", scalar });

    const frame = () => {
      if (Date.now() > end) {
        ButtonActive = true;
        return;
      }

      confetti({
        particleCount: 2,
        angle: 60,
        ticks: 200,
        spread: 55,
        startVelocity: 70,
        origin: { x: 0, y: 0.5 },
        shapes: [unicorn],
        scalar,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        ticks: 200,
        spread: 55,
        startVelocity: 70,
        origin: { x: 1, y: 0.5 },
        shapes: [unicorn],
        scalar,
      });

      requestAnimationFrame(frame);
    };

    frame();
  };

  return (
    <div className="relative hidden md:block duration-100 hover:brightness-107">
      <button onClick={handleClick}>
        <Image
          src="/Perfil.png"
          fill
          alt="Image"
          className="absolute inset-0 h-full w-full bg-none object-cover rounded-2xl cursor-none"
        />
      </button>
      <Pointer>
        <motion.div
          animate={{
            scale: [0.8, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-pink-600"
          >
            <motion.path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </Pointer>
    </div>
  );
}
