import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

import { useEffect, useState } from "react";
import LogoImg from "../assets/kevalon2.png";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  // Smooth animated value
  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) => Math.round(latest)
  );

  // Smooth progress update
  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;

      if (start <= 100) {
        count.set(start);
        setProgress(start);
      }

      if (start >= 100) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #020403 0%, #04110d 35%, #062017 65%, #020403 100%)",
        }}
      >
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[420px] h-[420px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(5,150,105,0.12) 45%, transparent 75%)",
          }}
        />

        {/* Secondary Glow */}
        <motion.div
          animate={{
            scale: [1.1, 0.95, 1.1],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-[650px] h-[650px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)",
          }}
        />

        {/* Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(52,211,153,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Main Content */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Logo */}
          <motion.img
            src={LogoImg}
            alt="Logo"
            initial={{
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              scale: [0.95, 1.05, 0.95],
              opacity: 1,
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-28 md:w-32 object-contain drop-shadow-[0_0_40px_rgba(16,185,129,0.45)]"
          />

          {/* Percentage Counter */}
          <motion.div
            className="mt-8 text-emerald-400 text-2xl md:text-3xl font-semibold tracking-wide"
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.span>{rounded}</motion.span>%
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-80 h-[7px] bg-white/10 rounded-full overflow-hidden mt-4 border border-emerald-500/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="h-full rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #34d399 0%, #10b981 50%, #065f46 100%)",
                boxShadow:
                  "0 0 20px rgba(16,185,129,0.6)",
              }}
            />
          </div>

          {/* Loading Text */}
          <motion.p
            animate={{
              opacity: [0.3, 1, 0.3],
              letterSpacing: [
                "3px",
                "5px",
                "3px",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-5 text-emerald-200/70 uppercase text-sm"
          >
            Loading Experience...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
} 