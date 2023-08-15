import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  width: 200px;
  height: 300px;

  background: rgb(66, 225, 153);
  background: linear-gradient(
    0deg,
    rgba(66, 225, 153, 1) 0%,
    rgba(59, 179, 184, 1) 100%
  );
  border: 2px solid transparent;
  border-radius: 40px;

  &:hover {
    background: #ffffff;
    border: 2px solid green;
  }
`;

export const Icon = styled.svg`
  fill: #ffffff;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
`;
