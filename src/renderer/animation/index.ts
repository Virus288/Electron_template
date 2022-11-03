export const slideRight = {
  init: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.1,
    },
  },
  exit: {
    x: '-800vw',
    transition: {
      delay: 0,
      duration: 1,
      when: 'beforeChildren',
    },
  },
};

export const slowSlideRight = {
  init: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: {
      delay: 0,
      duration: 0.8,
    },
  },
  exit: {
    x: '-800vw',
    transition: {
      delay: 0,
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
    transition: { delay: 0, duration: 0.5, when: 'beforeChildren' },
  },
  exit: {
    y: '-1000vw',
    transition: {
      delay: 0,
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
};
