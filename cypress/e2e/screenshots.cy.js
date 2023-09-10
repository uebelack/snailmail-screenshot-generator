import config from '../../src/config';

const BASE_URL = 'http://localhost:3000';

describe('screenshots', () => {
  it('take screenshots', () => {
    cy.visit('http://localhost:3000');

    config.devices.forEach((device) => {
      cy.viewport(device.width / 2, device.height / 2);

      device.screens.forEach((screen, index) => {
        config.languages.forEach((language) => {
          const url = `${BASE_URL}/screens/${device.key}/${screen.key}/${language}`;
          cy.visit(url);

          device.fastlaneKeys.forEach((fastlaneKey) => {
            const filename = `${language}/${index + 1}_${fastlaneKey}_${index + 1}`;
            cy.wait(500);
            cy.screenshot(filename, { overwrite: true, capture: 'viewport' });
          });
        });
      });
    });
  });
});
