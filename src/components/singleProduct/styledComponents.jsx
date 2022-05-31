import styled from "styled-components";

export const Container = styled.div`
  max-width: 386px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19)
  }
`
export const ImgWrapper = styled.div`
  
`
export const ProductImage = styled.img`
  width: 100%;
  min-width: 250px;
  height: 330px;
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