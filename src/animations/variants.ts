export const ANIMATION_VARIANTS = {
  fadeUp: {
    initial: { opacity: 0, y: 30, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeDown: {
    initial: { opacity: 0, y: -30, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  fadeLeft: {
    initial: { opacity: 0, x: 30, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  fadeRight: {
    initial: { opacity: 0, x: -30, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95, filter: "blur(8px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  }
};

export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

export const APPLE_EASE = [0.16, 1, 0.3, 1];
