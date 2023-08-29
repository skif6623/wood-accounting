import { useState, FormEvent, ChangeEvent, FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { login, logout } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  const name = useAppSelector(state => state.auth.name);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
        <button type="submit">Увійти</button>
        <Link to="/">Реєстрація</Link>
      </form>
      {isLoggedIn ? (
        <div>
          Вітаю, {name}
          <button type="button" onClick={handleClick}>
            Вийти
          </button>
        </div>
      ) : (
        <p>Увійдіть</p>
      )}
    </>
  );
};
