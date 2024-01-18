import React from 'react';
import AuthFormContent from './auth-form-content';
import tasksImage from '../../assets/tasks-image.svg';

export default function AuthPage() {
  return (
    <div className="flex w-full h-full overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full w-7/12 bg-white">
        <img className="w-3/5 mx-auto" src={tasksImage} alt="tasksImage" />
      </div>
      <div className="flex flex-col justify-center items-center h-full w-5/12 bg-blue-400">
        <AuthFormContent />
      </div>
    </div>
  );
}
