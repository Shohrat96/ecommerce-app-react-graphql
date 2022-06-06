import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.p`
  font-weight: 400;
  font-size: 42px;
  line-height: 67px;
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CardTotalWrapper = styled.div`
  display: flex;
  margin-top: 32px;
  flex-wrap: wrap;
  & > div:last-child {
    width: 279px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
export const BreakEl = styled.div`
  flex-basis: 100%;
  height: 0;
`
export const CardTotals = styled.table`
  tr {
    td {
      font-size: 24px;
      line-height: 28px;
      font-weight: 400;
      :nth-of-type(2) {
        font-weight: 700;
      }
    }
  }
`