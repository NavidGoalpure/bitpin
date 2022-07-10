import '../src/Styles/style.scss';
import React from 'react';
import { ThemeContextProvider } from '../src/Contexts/ThemeContext';
import AdminHeader from './AdminHeader';
import FullScreenContainer from './FullScreenContainer';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeContextProvider>
        <FullScreenContainer>
          <AdminHeader />
          <Story />
        </FullScreenContainer>
      </ThemeContextProvider>
    );
  },
];
