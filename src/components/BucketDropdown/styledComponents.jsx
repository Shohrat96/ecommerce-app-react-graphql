import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -44px;
  top: 81px;
  width: 325px;
  max-height: 677px;
  z-index: 99;
  background-color: #fff;
  padding: 32px 16px;
  overflow-x: hidden;
`;
export const Title = styled.div`
margin-bottom: 32px;
  & > span:nth-of-type(1) {
    font-weight: 700;
    font-size: 16px;
    line-height: 25.6px;
  }
  & > span:nth-of-type(2) {
    font-weight: 500;
    font-size: 16px;
    line-height: 25.6px;
  }
`
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
export const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 81px;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: ${props=>props.theme.colors.textColor};
  & > span:nth-of-type(1) {
    line-height: 18px;
    font-weight: 500;
  }
  & > span:nth-of-type(2) {
    line-height: 25.6px;
    font-weight: 700;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`