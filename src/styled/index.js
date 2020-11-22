import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
`