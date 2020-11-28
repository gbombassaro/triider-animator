import styled from 'styled-components';
import colors from '../utils/colors';

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
  margin-left: ${({marginLeft}) => marginLeft ? parseNumber(marginLeft) : '0px'};
  margin-right: ${({marginRight}) => marginRight ? parseNumber(marginRight) : '0px'};
  width: ${({width}) => width ? width : '100%'};
  height: ${({height}) => height ? height : 'max-content'};
  overflow-x: ${({overflowX}) => overflowX ? overflowX : 'unset'};
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: ${({wrap}) => wrap ? 'wrap' : 'nowrap'};
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  margin-top: ${({marginTop}) => marginTop ? parseNumber(marginTop) : '0px'};
  margin-bottom: ${({marginBottom}) => marginBottom ? parseNumber(marginBottom) : '0px'};
  width: ${({width}) => width ? width : '100%'};
`

export const Panel = styled.div`
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  padding: 40px;
  background-color: ${colors.white};
  margin-bottom: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`