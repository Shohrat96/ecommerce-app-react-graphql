import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
  padding: 24px 0;
  align-items:center;
  &:last-of-type {
    border-bottom: 1px solid #e5e5e5;
  }
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > span {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`
export const ProductCountAndImage = styled.div`
  display: flex;
`
export const ProductCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 24px;
`
export const PlusMinusButton = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid ${props => props.theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const Count = styled.div`
  display: flex;
  font-weight: 500;
  line-height: 38px;
  color: ${props => props.theme.colors.textColor};
`
export const ProductImage = styled.div`
  position: relative;
  & > img {
    width: 200px;
  }
`
export const ImageChange = styled.div`
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
`
export const PreviousImg = styled.div`
  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
  & > div {
    border: 2px solid #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-top-style: 'none';
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    margin-left: 5px;
  }
`
export const NextImg = styled.div`
  width: 24px;
  height: 24px;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > div {
    border: 2px solid #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-top-style: 'none';
    width: 10px;
    height: 10px;
    transform: rotate(135deg);
    margin-right: 5px;
  }
`