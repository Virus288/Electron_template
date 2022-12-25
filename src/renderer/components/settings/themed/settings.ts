import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as localTypes from '../../../types/theme';

// eslint-disable-next-line import/prefer-default-export
export const Section = styled(motion.div)<localTypes.IDefaultChildren>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 1rem;
`;
