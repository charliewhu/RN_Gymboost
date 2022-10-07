module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          envName: 'MY_ENV',
          path: '.env',
        },
      ],
    ],
  };
};
