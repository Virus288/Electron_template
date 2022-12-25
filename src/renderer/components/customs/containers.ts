import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as localTypes from '../../types';

/**
 * Container of elements used to cover space
 */
export const Container = styled(motion.div)<localTypes.IDefaultChildren>`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

/**
 * Container's body user to center elements inside
 */
export const ContainerBody = styled(Container)<localTypes.IContainerProps>`
  display: flex;
  flex-direction: ${(props): string => props.direction ?? 'column'};
  justify-content: ${(props): string => props.justify ?? 'center'};
  align-items: ${(props): string => props.align ?? 'center'};
  overflow-y: auto;
  overflow-x: hidden;
  background: ${(props): string => props.theme.background.semiTransparent};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.semiSlow};

  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 50px;
    background: ${(props): string => props.theme.background.opposite};
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props): string => props.theme.colors.ohOrange};
    border-radius: 50px;

    &:hover {
      cursor: pointer;
    }
  }
`;

/**
 * Container used as overlay
 */
export const OverlayContainer = styled(Container)<localTypes.IDefaultChildren>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
`;
