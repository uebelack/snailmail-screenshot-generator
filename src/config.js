import Iphone67Overview from './components/iphone67/Overview';
import Iphone67Detail from './components/iphone67/Detail';
import Iphone67Edit from './components/iphone67/Edit';
import Iphone67Features from './components/iphone67/Features';
import Iphone67ProFeatures from './components/iphone67/ProFeatures';

import Iphone55Overview from './components/iphone55/Overview';
import Iphone55Detail from './components/iphone55/Detail';
import Iphone55Edit from './components/iphone55/Edit';
import Iphone55Features from './components/iphone55/Features';
import Iphone55ProFeatures from './components/iphone55/ProFeatures';

import Ipad129Overview from './components/ipad129/Overview';
import Ipad129Edit from './components/ipad129/Edit';
import Ipad129Features from './components/ipad129/Features';

import MacOverview from './components/mac/Overview';
import MacEdit from './components/mac/Edit';
import MacFeatures from './components/mac/Features';

const config = {
  languages: [
    'en-US',
    'nl-NL',
    'it-IT',
    'es-ES',
    'fr-FR',
    'de-DE',
    'pt-PT',
  ],
  devices: [
    {
      key: 'iphone67',
      fastlaneKeys: ['APP_IPHONE_67'],
      width: 1290,
      height: 2796,
      screens: [
        { key: 'overview', component: Iphone67Overview },
        { key: 'detail', component: Iphone67Detail },
        { key: 'edit', component: Iphone67Edit },
        { key: 'features', component: Iphone67Features },
        { key: 'pro-features', component: Iphone67ProFeatures },
      ],
    },
    {
      key: 'iphone55',
      fastlaneKeys: ['APP_IPHONE_55'],
      width: 1242,
      height: 2208,
      screens: [
        { key: 'overview', component: Iphone55Overview },
        { key: 'detail', component: Iphone55Detail },
        { key: 'edit', component: Iphone55Edit },
        { key: 'features', component: Iphone55Features },
        { key: 'pro-features', component: Iphone55ProFeatures },
      ],
    },
    {
      key: 'ipad129',
      fastlaneKeys: ['APP_IPAD_PRO_129', 'APP_IPAD_PRO_3GEN_129'],
      width: 2732,
      height: 2048,
      screens: [
        { key: 'overview', component: Ipad129Overview },
        { key: 'edit', component: Ipad129Edit },
        { key: 'features', component: Ipad129Features },
      ],
    },
    {
      key: 'mac',
      fastlaneKeys: ['APP_DESKTOP'],
      width: 2880,
      height: 1800,
      screens: [
        { key: 'overview', component: MacOverview },
        { key: 'edit', component: MacEdit },
        { key: 'features', component: MacFeatures },
      ],
    },
  ],
};

export default config;
