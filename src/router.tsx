import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './interfaces/page';
import AuthPage from './pages/auth';
import Path from './interfaces/path';
import PageWrapper from './layout/page-wrapper';
import NotFoundPage from './pages/not-found-page';

function Router() {
  const pages: Page[] = [{ component: <AuthPage />, path: Path.LOGIN }];

  return (
    <BrowserRouter>
      <Routes>
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<PageWrapper>{page.component}</PageWrapper>}
          />
        ))}
        <Route
          path="*"
          element={(<NotFoundPage />)}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
