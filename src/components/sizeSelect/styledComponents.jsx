import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > p {
    font-weight: ${props=>props.dropdown ? '400' : '700'};
    color: ${props => props.theme.colors.textColor};
    font-size: ${props=>props.dropdown ? '14px' : '18px'};
    margin-bottom: 8px;
  }
`
export const SizesWrapper = styled.div`
  display: flex;
`
export const SingleSize = styled.div`
  width: ${props=>props.dropdown ? 'auto' : '63px'};
  height: ${props=>props.dropdown ? 'auto' : '45px'};
  border: 1px solid ${props => props.theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props=>props.active ? '#1D1F22' : '#fff'};
  color: ${props => props.active ? '#fff' : '#1D1F22'};
  font-weight: 400;
  font-size: ${props=>props.dropdown ? '14px' : '16px'};
  padding: 0 5px;
  line-height: 18px;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-right: ${props=>props.dropdown ? '8px' : '12px'};
  }
`