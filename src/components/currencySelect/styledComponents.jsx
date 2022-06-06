import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-right: 22px;
`
export const DropDown = styled.div`
  position: relative;
`
export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 39px;
`
export const Label = styled.span`
  margin-right: 10px;
`
export const ListWrapper = styled.div`
  position: absolute;
  top: 30px;
  left: -30px;
  background-color: #fff;
  z-index: 1000;
  width: 114px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.07);
`
export const CurOption = styled.div`
  padding: 8px 20px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 28.8px;
  color: ${props=>props.theme.colors.textColor};
  &:first-of-type {
    padding-top: 16px;
  };
  &:last-of-type {
    padding-bottom: 16px;
  }
  &:hover {
    background-color: #eeeeee
  }
`