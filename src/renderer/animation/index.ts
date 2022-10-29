export const slideRight = {
  init: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.7,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
};

export const opacity = {
  init: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.3 },
  },
  exit: {
    y: '-1000vw',
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
};
