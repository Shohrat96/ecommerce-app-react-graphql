import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`
export const NavItem = styled.div`
  padding-top: 28px;
  padding-bottom: 30px;
  padding-inline: 16px;
  cursor: pointer;
  ${props => props.active && (
    `border-bottom: 2px solid ${props.theme.colors.mainColor};
    color: ${props.theme.colors.mainColor};
    `
  )};
`