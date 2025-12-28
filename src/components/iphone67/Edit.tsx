import { LanguageCode } from '../../config';
import translations from '../../translations';

interface EditProps {
  language: LanguageCode;
}

function Edit({ language }: EditProps) {
  return (
    <div className="edit">
      <div className="teaser">{translations[language].edit}</div>
      <img
        className="screenshot"
        alt="screenshot"
        src={`/raw/${language}/iPhone 17 Pro-03_edit.png`}
      />
      <img className="mock" alt="iphone67" src="/iphone67.png" />
    </div>
  );
}

export default Edit;
