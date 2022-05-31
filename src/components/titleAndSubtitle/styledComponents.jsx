import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
`
export const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  line-height: 27px;
  margin-bottom: 16px;
`
export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 30px;
  line-height: 27px;
`