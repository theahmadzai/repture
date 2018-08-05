import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/main.ts',
  output: {
    name: 'repture',
    file: './dist/repture.js',
    format: 'umd',
    exports: 'named',
    sourcemap: true
  },
  plugins: [
    typescript({
      typescript: require('typescript')
    })
  ]
};
