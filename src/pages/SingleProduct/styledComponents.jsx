import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
`;
export const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
  max-height: 600px;
  overflow-x: scroll; // for vertical scroll (flex-dir: column)
  margin-right: 50px;
  width: 100%;
  & > div:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;
export const SingleImageWrapper = styled.div`
  cursor: pointer;
  & > img { 
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
  & > div:first-of-type {
    margin-bottom: 43px;
  }
  & > div:nth-of-type(3) {
    margin-top: 36px;
    margin-bottom: 20px;
  }
  & > div:nth-of-type(4) {
    margin-bottom: 40px;

  }
`