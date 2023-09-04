import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { userSelector } from '../../redux/selectors';
import { logout } from '../../redux/auth/operations';

export const UserMenu: FC = () => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>{user}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Вийти
      </button>
    </div>
  );
};
