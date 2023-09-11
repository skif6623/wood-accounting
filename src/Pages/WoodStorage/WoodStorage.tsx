import React, { FC } from 'react';

import { Link } from '../../components/Link/Link';
import { Outlet } from 'react-router-dom';

import { StorageTable, LinkWrap } from './WoodStorage.styled';

export const WoodStorage: FC = () => {
  return (
    <>
      <LinkWrap>
        <Link to="/">Кругляк</Link>
        <Link to="/board">Дошка</Link>
        <Link to="/pallets">Палети</Link>
      </LinkWrap>
      <StorageTable>
        <Outlet />
      </StorageTable>
    </>
  );
};
