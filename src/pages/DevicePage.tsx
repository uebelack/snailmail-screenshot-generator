import { useParams } from "react-router-dom";
import config from "../config";

function DevicePage() {
  const { deviceKey } = useParams();

  const device = config.devices.find((d) => d.key === deviceKey);

  if (!device) {
    return null;
  }

  return (
    <div className="device">
      {config.languages.map((language) => (
        <div key={language}>
          <h2>{language}</h2>
          <div className="language">
            {device.screens.map((screen) => (
              <iframe
                key={screen.key}
                style={{ width: device.width / 2, height: device.height / 2 }}
                title={`${deviceKey}_${screen.key}_${language}`}
                src={`/screens/${deviceKey}/${screen.key}/${language}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DevicePage;
