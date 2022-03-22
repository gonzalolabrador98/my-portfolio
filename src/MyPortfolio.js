import React, { useState } from 'react';
import AppRoute from './router/AppRoute';
import { WelcomeScreen } from './components/pages/welcomeScreen/WelcomeScreen';
import './index.css';

export const MyPortfolio = () => {
  const [welcome, setWelcome] = useState(true);

  if (welcome) {
    return <WelcomeScreen setWelcome={setWelcome} />;
  }

  return <AppRoute />;
};
