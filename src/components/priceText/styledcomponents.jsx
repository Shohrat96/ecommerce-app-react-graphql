import styled from "styled-components";

export const Container = styled.div`
  color: ${props=>props.theme.colors.textColor};
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  & > p {
    font-size: 24px;
    margin-top: 10px;
  }
`