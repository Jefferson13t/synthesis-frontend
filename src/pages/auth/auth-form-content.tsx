/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Button, PasswordInput, TextInput,
} from '@mantine/core';
import { useForm } from 'react-hook-form';
import LoginForm from '../../interfaces/login-form';
import { emailVerificationRegex } from '../../shared/utils/email-validation-regex';

export default function AuthFormContent() {
  const {
    handleSubmit, register, formState: { errors, isValid },
  } = useForm <LoginForm>({ mode: 'onTouched' });

  return (
    <div className="w-3/4">
      <form>
        <TextInput
          className="mb-6"
          placeholder="email"
          error={errors.email && errors.email.message}
          {...register('email', {
            required: { value: true, message: 'O campo é obrigatório.' },
            validate: {
              validEmail: (email) => emailVerificationRegex.test(email) || 'E-mail inválido!' as string,
            },
          })}
        />
        <PasswordInput
          placeholder="password"
          error={errors.password && errors.password.message}
          {...register('password', {
            required: { value: true, message: 'O campo é obrigatório.' },
            validate: {
              validPassword: (password) => password.length > 5 || 'A senha deve ter pelo menos 6 caracteres.' as string,
            },
          })}
        />
        <Button
          fullWidth
          disabled={!isValid}
          color="white"
          variant="outline"
          className="mt-8"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
}
