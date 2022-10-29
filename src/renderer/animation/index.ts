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
    y: '-1000vw',
    transition: {
      ease: 'easeInOut',
      duration: 1.2,
    },
  },
};
