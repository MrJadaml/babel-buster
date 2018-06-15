import babel from 'rollup-plugin-babel';

export default {
  input: 'lib/index.js',

  output: {
    file: './dist/bundle.js',
    format: 'es'
  },

  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
  ],

  external: ['react'],
};
