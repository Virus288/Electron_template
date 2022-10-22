export const slideRight = {
  init: {
    x: '-800vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-800vw',
    transition: {
      duration: 0.5,
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
    opacity: 0,
    transition: { delay: 0.5, duration: 1 },
  },
};

export const slideBottom = {
  init: {
    y: '-100vw',
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
    },
  },
  exit: {
    y: '-1000vw',
    transition: {
      ease: 'easeInOut',
      duration: 1,
    },
  },
};
