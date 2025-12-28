import { LanguageCode } from '../../config';
import translations from '../../translations';

interface OverviewProps {
  language: LanguageCode;
}

function Overview({ language }: OverviewProps) {
  return (
    <div className="overview">
      <div className="teaser">{translations[language].overview}</div>
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/iPad Air 11-inch (M3)-01_overview.png`}
      />
      <img className="mock" alt="ipad129" src="/ipad129.png" />
      <div className="border" />
    </div>
  );
}

export default Overview;
