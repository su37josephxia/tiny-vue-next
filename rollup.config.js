import typescript from 'rollup-plugin-typescript2';


export default {
  input: 'package/vue/index.ts',
  output: {
    file: 'package/vue/dist/index.js',
    // format: 'iife',
    name: 'Vue',
    format:'umd'
  },
  plugins: [
    typescript(/*{ plugin options }*/)
  ]
  // plugins: [
  //   ts({
  //     // tsconfig: path.resolve(__dirname, 'tsconfig.json'),
  //   })
  // ]
}




