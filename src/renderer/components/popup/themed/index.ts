import styled from 'styled-components';
import { motion } from 'framer-motion';
import * as localTypes from '../../../types/theme';

const Popup = styled(motion.div)<localTypes.IDefaultChildren>`
  left: 0;
  top: 0;
  width: 30%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props): string => props.theme.colors.default};
  border: 1px solid ${(props): string => props.theme.colors.ohOrange};
  background: linear-gradient(
    140deg,
    ${(props): string => props.theme.colors.ohOrange} 2%,
    ${(props): string => props.theme.background.semiTransparent} 10%
  );
  box-shadow: 3px 0 10px ${(props): string => props.theme.shadows.default};
  border-radius: 10px;
  transition: ${(props): string => props.theme.transition.default};
  z-index: 10;

  h2 {
    font-weight: lighter;
    letter-spacing: 0.9px;
    font-size: 1.6rem;
    width: 300px;
    height: 100px;
    text-align: center;
  }
`;

export default Popup;
