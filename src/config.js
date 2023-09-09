const config = {
  languages: [
    'de-DE',
    // 'nl-NL',
    // 'it-IT',
    // 'es-ES',
    // 'fr-FR',
    // 'en-US',
  ],
  devices: [
    {
      key: 'iphone67',
      fastlaneKey: 'APP_IPHONE_67',
      width: 1290,
      height: 2796,
      screens: [
        { key: 'overview' },
        { key: 'detail' },
        { key: 'edit' },
        { key: 'features' },
        { key: 'pro-features' },
      ],
    },
    {
      key: 'iphone55',
      fastlaneKey: 'APP_IPHONE_55',
      width: 1242,
      height: 2208,
      screens: [
        { key: 'overview' },
        { key: 'detail' },
        { key: 'edit' },
        { key: 'features' },
        { key: 'pro-features' },
      ],
    },
    {
      key: 'ipad129',
      fastlaneKey: 'APP_IPAD_PRO_129',
      width: 2732,
      height: 2048,
      screens: [
        { key: 'overview' },
        { key: 'edit' },
        { key: 'features' },
        { key: 'pro-features' },
      ],
    },
  ],
};

export default config;
