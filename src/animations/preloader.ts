export const preloaderVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" }
    },
    exit: { 
      opacity: 0, 
      scale: 1.02, 
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  },
  logo: {
    hidden: { opacity: 0, scale: 0.92, filter: "blur(12px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    }
  },
  glow: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.8 } }
  },
  text: {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 } 
    }
  },
  tagline: {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.8 } 
    }
  },
  line: {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 1.2, ease: "easeInOut", delay: 1 } 
    }
  },
  status: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.4, delay: 1.2 } }
  }
};
