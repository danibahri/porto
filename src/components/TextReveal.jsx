import React, { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

// Split text into characters and animate each one
export const SplitText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
  yOffset = 40,
  as: Tag = "div",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const text = typeof children === "string" ? children : "";
  const chars = text.split("");

  return (
    <Tag ref={ref} className={`${className}`} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: yOffset, opacity: 0, rotateX: -40 }}
          animate={
            isInView
              ? { y: 0, opacity: 1, rotateX: 0 }
              : { y: yOffset, opacity: 0, rotateX: -40 }
          }
          transition={{
            duration: 0.6,
            delay: delay + i * duration,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ display: "inline-block", willChange: "transform" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Tag>
  );
};

// Reveal text word by word
export const WordReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "div",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isInView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: delay + i * 0.08,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};

// Text line reveal with mask
export const LineReveal = ({
  children,
  className = "",
  delay = 0,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={isInView ? { y: "0%" } : { y: "100%" }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.215, 0.61, 0.355, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// Scramble text effect on hover
const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";

export const ScrambleText = ({ children, className = "" }) => {
  const [displayText, setDisplayText] = useState(children);
  const originalText = typeof children === "string" ? children : "";
  const intervalRef = useRef(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        originalText
          .split("")
          .map((char, i) => {
            if (i < iteration) return originalText[i];
            if (char === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join(""),
      );

      if (iteration >= originalText.length) {
        clearInterval(intervalRef.current);
      }
      iteration += 1 / 2;
    }, 30);
  }, [originalText]);

  const reset = useCallback(() => {
    clearInterval(intervalRef.current);
    setDisplayText(originalText);
  }, [originalText]);

  return (
    <span className={className} onMouseEnter={scramble} onMouseLeave={reset}>
      {displayText}
    </span>
  );
};

// Fade up animation wrapper
export const FadeUp = ({
  children,
  className = "",
  delay = 0,
  once = true,
  duration = 0.6,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ y: 30, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
