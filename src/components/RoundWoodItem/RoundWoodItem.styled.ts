import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;

  font-weight: 500;

  border: 1px solid #e0e5ea;
  border-radius: 4px;

  transform: scale(1);
  transition: all 250ms ease;

  &:hover {
    background-color: #ebf9ec;
    border: 1px solid #3ecba7;

    transform: scale(1.03);
  }
`;

export const Text = styled.p`
  flex-basis: 20%;
`;
