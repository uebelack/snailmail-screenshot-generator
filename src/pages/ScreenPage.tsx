import { useParams } from 'react-router-dom';
import Screen from '../components/Screen';
import { LanguageCode } from '../config';

function ScreenPage() {
  const { deviceKey, screenKey, language } = useParams();

  if (!deviceKey || !screenKey || !language) {
    return null;
  }

  return (
    <Screen
      deviceKey={deviceKey}
      screenKey={screenKey}
      language={language as LanguageCode}
    />
  );
}

export default ScreenPage;
