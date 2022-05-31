import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 100px;
  display: flex;
  flex-direction: column;
  min-height: 98vh;
  @media (max-width: 980px) {
    padding-inline: 30px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;
