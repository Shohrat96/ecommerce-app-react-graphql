import styled from "styled-components";

export const Container = styled.div.attrs(props => ({
  className: props?.className || '',
}))`
  padding: 16px 32px;
  background-color: ${props => props.theme.colors.mainColor};
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align:center;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${props=>props.disabled && 'none'};
  opacity: ${props=>props.disabled && '50%'};
`