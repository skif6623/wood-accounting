import { FC, ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { loggedInSelector, refreshSelector } from '../../redux/selectors';

interface PrivateRoutePropTypes {
  component: ComponentType;
  to: string;
}

export const PrivateRoute: FC<PrivateRoutePropTypes> = ({
  component: Component,
  ...routeProps
}) => {
  const isLoggedIn = useAppSelector(loggedInSelector);
  const isRefreshing = useAppSelector(refreshSelector);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate {...routeProps} /> : <Component />;
};
