module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@hooks': './src/hooks',
          '@common': './src/common',
          '@components': './src/components',
          '@utils': './src/utils',
          '@config': './src/config',
          '@screens': './src/screens',
          '@typeRoots': './src/typeRoots',
          '@assets': './src/assets',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
