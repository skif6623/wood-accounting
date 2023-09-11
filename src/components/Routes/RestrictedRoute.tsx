import { FC, ComponentType } from 'react';

import { useAppSelector } from '../../hooks/hooks';
import { loggedInSelector, isRegisterSelector } from '../../redux/selectors';

import { Navigate } from 'react-router-dom';

interface RestrictedRoutePropTypes {
  component: ComponentType;
  redirectTo: string;
  type: 'register' | 'login';
}

export const RestrictedRoute: FC<RestrictedRoutePropTypes> = ({
  component: Component,
  redirectTo = '/',
  type,
}) => {
  const isLoggedIn = useAppSelector(loggedInSelector);
  const isRegister = useAppSelector(isRegisterSelector);
  if (type === 'register') {
    return isRegister ? <Navigate to={redirectTo} /> : <Component />;
  }
  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
