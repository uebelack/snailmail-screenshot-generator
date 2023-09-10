import React from 'react';
import { useParams } from 'react-router-dom';
import Screen from '../components/Screen';

function ScreenPage() {
  const { deviceKey, screenKey, language } = useParams();
  return (
    <Screen deviceKey={deviceKey} screenKey={screenKey} language={language} />
  );
}

export default ScreenPage;
