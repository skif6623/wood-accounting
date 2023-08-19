import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Icon = styled.svg`
  fill: #ffffff;
  width: 150px;
  height: 150px;

  transition: fill 250ms ease;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;

  transition: color 250ms ease;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 50px;
  }
`;

export const Card = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  width: 270px;
  height: 320px;

  text-decoration: none;

  background: rgb(66, 225, 153);
  background: linear-gradient(
    0deg,
    rgba(66, 225, 153, 1) 0%,
    rgba(59, 179, 184, 1) 100%
  );
  border-radius: 40px;

  transform: scale(1);
  transition: transform 250ms ease;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(0deg, rgb(13 54 35) 0%, rgb(115 196 200) 100%);
  }

  /* &:hover {
    & > ${Icon} {
      fill: #ffffff;
    }

    & > ${Text} {
      color: #ffffff;
    }
  } */

  @media screen and (min-width: 768px) {
    width: 350px;
    height: 500px;
  }
  @media screen and (min-width: 1200px) {
    width: 550px;
    height: 500px;
  }
`;
