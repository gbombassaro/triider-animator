import styled from 'styled-components';
import colors from '../utils/colors';
import queries from '../utils/queries';

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

  &:last-child {
    .Divider {
      display: none;
    }
    .shift-card {
      margin-bottom: 0px;
    }
    &.shift-card-container {
      margin-bottom: 0px;
    }
  }
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

export const ContentContainer = styled.div`
  z-index: 1;
  position: absolute;
  width: ${({marginX}) => marginX ? `calc(100vw - ${marginX * 2}px)` : 'calc(100vw - 80px)'};
  height: 100vh;
  padding-left: ${({marginX}) => marginX ? parseNumber(marginX) : '40px'};
  padding-right: ${({marginX}) => marginX ? parseNumber(marginX) : '40px'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${queries.lg}) {
    width: calc(100% - 50px - 20px);
    position: unset;
    display: flex;
    z-index: 0;
    padding-right: 50px;
    padding-left: 50px;
  }
`

export const ShiftContainer = styled.div`
  width: calc(100% - 36px);
  height: calc(120px - 36px);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: ${({alignItems}) => alignItems ? alignItems : 'center'};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : 'center'};
  border-radius: 5px;
  background-color: ${({color}) => color ? color : '#C4C4C4'};
  opacity: ${({disabled}) => disabled ? 0.3 : 1};
  padding: 18px;
  &:first-child {
    margin-top: 0px;
  }
`

export const Divider = styled.div`
  width: 100%;
  height: 10px;
  background-color: #E9E9E9;
  border-radius: 20px;
  opacity: 0.3;
`