"use client";
import React, { useState, useEffect, useRef } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & React.HTMLAttributes<HTMLElement>
>) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>("TOP");

  const rotateDirection = (currentDirection: Direction): Direction => {
    const directions: Direction[] = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap: Record<Direction, string> = {
    TOP: "radial-gradient(35% 80% at 50% 0%, hsl(182, 100%, 50%) 0%, rgba(182, 255, 28, 0.8) 30%, rgba(255, 255, 255, 0) 100%)",
    LEFT: "radial-gradient(30% 70% at 0% 50%, hsl(182, 100%, 50%) 0%, rgba(182, 255, 28, 0.8) 30%, rgba(255, 255, 255, 0) 100%)",
    BOTTOM: "radial-gradient(35% 80% at 50% 100%, hsl(182, 100%, 50%) 0%, rgba(182, 255, 28, 0.8) 30%, rgba(255, 255, 255, 0) 100%)",
    RIGHT: "radial-gradient(30% 70% at 100% 50%, hsl(182, 100%, 50%) 0%, rgba(182, 255, 28, 0.8) 30%, rgba(255, 255, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(100% 200% at 50% 50%, #b6ff1c 0%, rgba(182, 255, 28, 0.6) 40%, rgba(255, 255, 255, 0) 100%)";

  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 1000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event: React.MouseEvent<HTMLDivElement>) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border content-center bg-black/5 hover:bg-black/3 transition duration-500 dark:bg-white/5 dark:hover:bg-white/3 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit shadow-md hover:shadow-[0_0_15px_rgba(182,255,28,0.2)]",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-black dark:text-white z-10 bg-white dark:bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(4px) brightness(1.5)",
          position: "absolute",
          width: "100%",
          height: "100%",
          boxShadow: "0 0 8px rgba(182, 255, 28, 0.3), inset 0 0 8px rgba(182, 255, 28, 0.2)",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className={cn("bg-white dark:bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]", containerClassName?.includes('rounded-2xl') ? 'rounded-2xl' : containerClassName?.includes('rounded-full') ? 'rounded-full' : 'rounded-[100px]')} />
    </Tag>
  );
}
