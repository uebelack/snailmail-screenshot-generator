import React from "react";
import { useSearchParams } from "react-router-dom";
import config, { LanguageCode } from "../config";
import Screen from "../components/Screen";

const SCALE_OPTIONS = [0.25, 0.5, 0.75, 1.0];
const DEFAULT_SCALE = 0.5;

function OverviewPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const scaleParam = searchParams.get("scale");
  const languageParam = searchParams.get("language");

  const scale = scaleParam ? parseFloat(scaleParam) : DEFAULT_SCALE;
  const language = (languageParam as LanguageCode) || config.languages[0];

  const handleScaleChange = (newScale: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("scale", newScale);
    setSearchParams(params);
  };

  const handleLanguageChange = (newLanguage: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("language", newLanguage);
    setSearchParams(params);
  };

  return (
    <div className="overview-page">
      <div className="overview-controls">
        <label>
          Language:
          <select
            value={language}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleLanguageChange(e.target.value)
            }
          >
            {config.languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </label>

        <label>
          Scale:
          <select
            value={scale}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleScaleChange(e.target.value)
            }
          >
            {SCALE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s * 100}%
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="overview-grid">
        {config.devices.map((device) => (
          <div key={device.key} className="overview-device">
            <h2>{device.key}</h2>
            <div className="overview-screens">
              {device.screens.map((screen) => (
                <div
                  key={screen.key}
                  className="overview-screen-wrapper"
                  style={{
                    width: (device.width / 2) * scale,
                    height: (device.height / 2) * scale,
                  }}
                >
                  <div
                    className="overview-screen-scaled"
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                    }}
                  >
                    <Screen
                      deviceKey={device.key}
                      screenKey={screen.key}
                      language={language}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverviewPage;
