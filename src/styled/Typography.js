import styled from 'styled-components';

export const StyledLabel = styled.label`
  font-family: 'Quicksand';
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${({warning}) => warning ? 'red' : '#565656'};
  margin-bottom: ${({isMobile}) => isMobile ? '8px' : '20px'};
`