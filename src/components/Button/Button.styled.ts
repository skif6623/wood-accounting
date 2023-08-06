import styled from 'styled-components';

export const Btn = styled.button`
  padding: 10px 20px;

  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  background-color: #3ecba7;
  border: 2px solid transparent;

  transition: background-color 500ms ease, color 250ms ease, border 250ms ease;

  &:hover,
  &:focus {
    color: #3ecba7;

    background-color: #ffffff;
    border: 2px solid #3ecba7;
    cursor: pointer;
  }

  &:active {
    color: #ffffff;

    background-color: #3ecba7;
  }
`;
