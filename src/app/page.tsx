'use client';

import MyButton from '@/components/button/Button';
import { useState } from 'react';
import StyledHome from './page.styles';

const Home = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

  const handleClick = () => {
    if (showWelcomeMessage) {
      setShowWelcomeMessage(false);
    } else {
      setShowWelcomeMessage(true);
    }
  };

  const buttonText = showWelcomeMessage
    ? 'Ocultar saudação'
    : 'Mostrar saudação';

  return (
    <StyledHome>
      <MyButton onClick={handleClick} text={buttonText} />
      {showWelcomeMessage && (
        <h1>Bem vindo a página do Laboratório de Forró</h1>
      )}
    </StyledHome>
  );
};

export default Home;
