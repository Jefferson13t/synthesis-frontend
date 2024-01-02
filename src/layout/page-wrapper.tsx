import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export default function PageWrapper({ children }: Props) {
  return (
    <div className="w-full h-screen bg-gray-50">
      {children}
    </div>
  );
}
