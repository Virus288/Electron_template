import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as localTypes from '../../../types/theme';

// eslint-disable-next-line import/prefer-default-export
export const Notification = styled(motion.div)<localTypes.IDefaultChildren>`
  position: fixed;
  top: 10px;
  right: 20px;
  height: 50px;
  min-width: 250px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid ${(props): string => props.theme.colors.ohOrange};
  background: ${(props): string => props.theme.background.semiTransparent};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};
  z-index: 9;
`;
