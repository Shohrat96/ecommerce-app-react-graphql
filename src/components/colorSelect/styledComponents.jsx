import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: 700;
    color: ${props => props.theme.colors.textColor};
    font-size: 18px;
    margin-bottom: 8px;
  }
`
export const ColorsWrapper = styled.div`
  display: flex;
`
export const OuterWrapper = styled.div`
  border: 1px solid ${props => props.active ? props.theme.colors.mainColor : 'transparent'};
  display: flex;
  width: ${props=>props.dropdown ? '20px' : '36px'};
  height: ${props=>props.dropdown ? '20px' : '36px'};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`
export const SingleColor = styled.div`
  background-color: ${props=> props.color};
  width: ${props=>props.dropdown ? '16px' : '32px'};
  height: ${props=>props.dropdown ? '16px' : '32px'};
`