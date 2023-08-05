import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkBtn = styled(NavLink)`
  display: inline-block;
  padding: 15px 20px;

  text-decoration: none;
  color: black;

  border: 2px solid transparent;

  transition: all 250ms ease;

  &:hover {
    color: #3ecba7;

    background-color: #ebf9ec;
    border: 2px solid #3ecba7;
  }

  &.active {
    color: #3ecba7;

    background-color: #ebf9ec;
    border: 2px solid #3ecba7;
  }
`;
