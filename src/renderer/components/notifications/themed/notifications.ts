import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as localTypes from '../../../types';
import { ExitButton } from '../../customs';

export const Notification = styled(motion.div)<localTypes.INotificationProps>`
  position: fixed;
  top: ${(props): number => props.$nth * 60 + 70}px;
  right: 20px;
  height: 50px;
  min-width: 250px;
  padding: 10px;
  margin: 5px;
  border-radius: 20px;
  border: 1px solid ${(props): string => props.theme.colors.ohOrange};
  background: ${(props): string => props.theme.background.semiTransparent};
  box-shadow: ${(props): string => `2px 2px 2px ${props.theme.colors.ohOrange}`};
  color: ${(props): string => props.theme.colors.default};
  z-index: 9;
`;

export const DisableNotifications = styled(ExitButton)<localTypes.IDefaultChildren>`
  right: 80px;
  left: auto;
  font-size: 2.5em;
`;
