import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 125px; */
  flex: 1;
  & > span {
    font-weight: 500;
    font-weight: 25px;
    font-size: 16px;
    margin-bottom: 8px;
  }
`
export const ProductBrandAndName = styled.div`
  font-size: 16px;
  color: ${props=>props.theme.colors.textColor};
  line-height: 25px;
  margin-bottom: 4px;
`
export const ProductCountAndImage = styled.div`
  display: flex;
  flex: 1;
`
export const ProductCount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-right: 8px;
`
export const PlusMinusButton = styled.div`
  width: 24px;
  height: 24px;
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
  width: 121px;
  & > img {
    width: 100%;
    height: 190px;
  }
`