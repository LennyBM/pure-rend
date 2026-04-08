"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  viewportMargin?: string;
}

export function StaggerContainer({
  children,
  className = "",
  delayChildren = 0,
  staggerChildren = 0.1,
  viewportMargin = "-50px",
}: StaggerContainerProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin as string }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 20,
  duration = 0.5,
}: StaggerItemProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: "easeOut",
          },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
