import React from 'react';
import styled from 'styled-components';
import Typography from '../Typography';
import {Row} from '../../styled';
import colors from '../../utils/colors';

const StyledDialog = styled.dialog`
  width: calc(100% - 64px - 32px);
  max-width: 560px;
  padding: 32px;
  margin-left: 16px;
  margin-right: 16px;
  background-color: ${colors.white};
  border-radius: 5px;
  border: unset;
  position: relative;
  top: 20%;
  margin-left: auto;
  margin-right: auto;
`
const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
`

const Dialog = ({open, onClose, title, children}) => {
  if (!open) return null;
  return (
    <Backdrop>
      <StyledDialog open={open}>
        <Row justifyContent='space-between' marginBottom={40}>
          <Typography size={20} color={colors.primary} textAlign='left'>{title}</Typography>
          <img src='/closeIcon.svg' width={24} height={24} onClick={onClose} />
        </Row>
        {children}
      </StyledDialog>
    </Backdrop>
  )
}

export default Dialog;