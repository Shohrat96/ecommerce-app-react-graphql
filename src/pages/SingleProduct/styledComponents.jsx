import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
export const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
  & > div:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;
export const SingleImageWrapper = styled.div`
  width: 80px;
  & > img {
    max-height: 80px;
    width: 100%;
  }
`;
export const SelectedImage = styled.div`
  max-width: 610px;
  width: 100%;
  & > img {
    width: 100%;
    height: 511px;
    object-fit: contain;
  }
`;

export const DetailsWrapper = styled.div`
  margin-left: 100px;
  display: flex;
  flex-direction: column;
`