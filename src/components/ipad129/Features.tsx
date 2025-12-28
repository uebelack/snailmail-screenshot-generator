import { LanguageCode } from '../../config';
import translations from '../../translations';

interface FeaturesProps {
  language: LanguageCode;
}

function Features({ language }: FeaturesProps) {
  return (
    <div className="features-sidebyside">
      <div className="features">
        <div className="features-title">{translations[language].features.title}</div>
        <div className="features-list">
          {translations[language].features.features.map((feature) => (
            <div className="feature" key={feature.title}>
              <div className="feature-icon"><i className={`fa fa-${feature.icon}`} /></div>
              <div className="feature-details">
                <div className="feature-title">{feature.title}</div>
                <div className="feature-description">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="features">
        <div className="features-title">{translations[language].proFeatures.title}</div>
        <div className="features-list">
          {translations[language].proFeatures.features.map((feature) => (
            <div className="feature" key={feature.title}>
              <div className="feature-icon"><i className={`fa fa-${feature.icon}`} /></div>
              <div className="feature-details">
                <div className="feature-title">{feature.title}</div>
                <div className="feature-description">{feature.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
