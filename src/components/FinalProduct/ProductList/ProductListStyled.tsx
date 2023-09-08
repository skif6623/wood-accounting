import styled from 'styled-components';

export const DesctiptionList = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 15px;
    padding: 15px;
    background-color: #fbfbfc;
    border: 1px solid #e0e5ea;
  }
`;

export const DesctiptionItem = styled.p`
  flex-basis: 16%;

  @media screen and (min-width: 880px) {
    flex-basis: 17%;
  }

  @media screen and (min-width: 1000px) {
    flex-basis: 18%;
  }

  @media screen and (min-width: 1200px) {
    flex-basis: 19%;
  }

  @media screen and (min-width: 1300px) {
    flex-basis: 20%;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 15px;
`;
