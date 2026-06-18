"use client";

import React, { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

export type AnimationType =
  | "fade-in"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "scale-up";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number; // in milliseconds
  duration?: number; // in milliseconds
  threshold?: number; // 0 to 1
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  animation = "slide-up",
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerRef = ref.current;
    if (!observerRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) {
            observer.unobserve(observerRef);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport fully
      }
    );

    observer.observe(observerRef);

    return () => {
      if (observerRef && !once) {
        observer.unobserve(observerRef);
      }
    };
  }, [once, threshold]);

  const transitionStyle: React.CSSProperties = {
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`reveal-wrapper reveal-${animation} ${
        isIntersecting ? "revealed" : ""
      } ${className}`}
      style={transitionStyle}
    >
      {children}
    </div>
  );
}
