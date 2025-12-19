import { LanguageCode } from '../../config';
import translations from '../../translations';

interface OverviewProps {
  language: LanguageCode;
}

function Overview({ language }: OverviewProps) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img className="mock" alt="mac" src="/mac.png" />
      <img className="screenshot" alt="screenshot" src={`/raw/${language}/Mac_Overview.png`} />
      <img className="logo" alt="logo" src="/logo.svg" />
    </div>
  );
}

export default Overview;
