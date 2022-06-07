import styled from "styled-components";

export const AddToCardWrapper = styled.div`
  position: absolute;
  bottom: -5px;
  right: -10px;
  width: 52px;
  height: 52px;
  border-radius: 100%;
  background-color: ${props => props.theme.colors.mainColor};
  display: none;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 386px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  padding: 16px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
  &:hover ${AddToCardWrapper} {
    display: flex;
  }
`
export const OutOfStockLayer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: #fff;
  opacity: 0.5;
  pointer-events: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  color: #8D8F9A;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImgWrapper = styled.div`
  position: relative;
  width: max-content;
`
export const ProductImage = styled.img`
  width: 250px;
  height: 330px;
  object-fit: contain;
`
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > span:nth-of-type(1) {
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.theme.colors.textColor}
  }
  & > span:nth-of-type(2) {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: ${props => props.theme.colors.textColor}
  }
`