import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
  @media screen and (min-width: 1000px) {
    margin-top: 50px;
  }
`;
