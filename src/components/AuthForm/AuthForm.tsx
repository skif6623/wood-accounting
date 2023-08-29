import React, { FC, FormEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { register } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

// interface AuthFormProps {
//   type: 'register' | 'login';
// }

export const AuthForm: FC = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.user.value;
    const email = form.email.value;
    const password = form.password.value;

    const credentials = {
      name,
      email,
      password,
    };

    dispatch(register(credentials));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit">Зареєструватися</button>
      <Link to="/login">Логін</Link>
    </form>
  );
};
