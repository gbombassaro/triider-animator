import styled from 'styled-components';

const parseNumber = number => {
  return `${number}px`
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  margin-top: ${({marginTop}) => marginTop ? parseNumber(marginTop) : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? parseNumber(marginBottom) : '0px'};
  width: 100%;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  margin-top: ${({marginTop}) => marginTop ? parseNumber(marginTop) : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? parseNumber(marginBottom) : '0px'};
  width: 100%;
`