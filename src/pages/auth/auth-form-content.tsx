import React from 'react';
import { Button, PasswordInput, TextInput } from '@mantine/core';

export default function AuthFormContent() {
  return (
    <div className="w-3/4">
      <p className="text-white text-4xl mb-8">Sign in</p>
      <form>
        <TextInput
          className="mb-6"
          placeholder="email"
        />
        <PasswordInput
          placeholder="password"
        />
        <Button
          fullWidth
        // disabled={!isValid}
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
