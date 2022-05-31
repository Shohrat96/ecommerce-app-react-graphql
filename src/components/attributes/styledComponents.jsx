import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > div:not(:last-of-type) {
    margin-bottom: 24px;
  }
`