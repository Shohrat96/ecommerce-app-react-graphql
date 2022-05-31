import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
`
export const CurrencyAndBucket = styled.div`
  display: flex;
  padding-top: 28px;
  padding-bottom: 30px;
  align-items: center;
  & > * {
    cursor: pointer;
  }
`
export const Currency = styled.div`
  margin-right: 38px;
  font-size: 18px;
  line-height: 28px;
  font-weight: 500;
  display: flex;
`
export const BucketWrapper = styled.div`
  position: relative;
`
export const CardItemCount = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 100%;
  top: -20px;
  left: 10px;
`