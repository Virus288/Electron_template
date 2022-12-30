import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as localTypes from '../../../types';

// eslint-disable-next-line import/prefer-default-export
export const Section = styled(motion.div)<localTypes.ISectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  margin: 1rem;
  padding: 1rem;
  box-shadow: ${(props): string => `2px 2px 10px ${props.theme.shadows.default}`};
  transition: ${(props): string => props.theme.transition.default};

  &:focus-within {
    transition: ${(props): string => props.theme.transition.default};
    box-shadow: ${(props): string =>
      props.$focusWithin
        ? `2px 2px 10px ${props.theme.colors.ohOrange}`
        : `2px 2px 10px ${props.theme.shadows.default}`};
  }
`;
