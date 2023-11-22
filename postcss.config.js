module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    'postcss-mixins': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'nesting-rules': false,
      },
    },
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: 'advanced',
    },
  },
};
