import { useState, FormEvent, ChangeEvent, FC } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { login, register } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

interface AuthFormPropsTypes {
  type: 'login' | 'register';
}

export const AuthForm: FC<AuthFormPropsTypes> = ({ type }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const loginDispatch = () => {
    dispatch(login({ email, password }));
  };

  const registerDispatch = () => {
    dispatch(register({ name, email, password }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    type === 'login' ? loginDispatch() : registerDispatch();
  };

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {type === 'register' && (
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              value={name}
            />
          </label>
        )}

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </label>

        <button type="submit">
          {type === 'login' ? 'Увійти' : 'Зареєструватися'}
        </button>

        {type === 'login' ? (
          <Link to="/register">Реєстрація</Link>
        ) : (
          <Link to="/login">Логін</Link>
        )}
      </form>
    </>
  );
};
