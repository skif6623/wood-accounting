import styled from 'styled-components';

interface BtnPropsType {
  $tablet?: string;
  $center?: boolean;
}

export const Btn = styled.button<BtnPropsType>`
  width: 100%;
  height: 50px;

  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  background-color: #3ecba7;
  border: 2px solid transparent;

  transition: background-color 500ms ease, color 250ms ease, border 250ms ease;

  &:hover {
    color: #3ecba7;

    background-color: #ffffff;
    border: 2px solid #3ecba7;
    cursor: pointer;
  }

  &:active {
    color: #ffffff;

    background-color: #3ecba7;
  }

  @media screen and (min-width: 768px) {
    width: ${({ $tablet }) => ($tablet ? $tablet : '100px')};
    height: 50px;
    margin: ${({ $center }) => $center && '0 auto'};
  }
`;
