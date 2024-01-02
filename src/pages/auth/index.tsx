import React from 'react';
import AuthFormContent from './auth-form-content';

export default function AuthPage() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="h-full w-7/12 bg-white" />
      <div className="h-full w-5/12 bg-blue-400">
        <AuthFormContent />
      </div>
    </div>
  );
}
