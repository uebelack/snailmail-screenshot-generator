#!/bin/bash

mv cypress/screenshots/screenshots.cy.js/it-IT cypress/screenshots/screenshots.cy.js/it

for lang in `ls cypress/screenshots/screenshots.cy.js | cut -d'.' -f1`
do
  if [ ! -d ../snailmail/fastlane/screenshots/$lang ]; then
    mkdir ../snailmail/fastlane/screenshots/$lang
  fi

  if [ ! -d ../snailmail/fastlane/screenshots-mac/$lang ]; then
    mkdir ../snailmail/fastlane/screenshots-mac/$lang
  fi

  find ./cypress/screenshots/screenshots.cy.js/$lang -name "*APP_I*" -exec cp {} ../snailmail/fastlane/screenshots/$lang \;
  find ./cypress/screenshots/screenshots.cy.js/$lang -name "*APP_D*" -exec cp {} ../snailmail/fastlane/screenshots-mac/$lang \;
done

mv cypress/screenshots/screenshots.cy.js/it cypress/screenshots/screenshots.cy.js/it-IT