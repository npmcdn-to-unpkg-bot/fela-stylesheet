import rollup from 'rollup'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

// Small helper to error and exit on fail
const errorOnFail = err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
}

const babelPlugin = babel({
  babelrc: false,
  presets: [ 'es2015-rollup', 'stage-0' ]
})

const plugins = [ babelPlugin ]


function rollupConfig(minify) {
  return {
    entry: 'modules/StyleSheet.js',
    plugins: minify ? plugins.concat(uglify()) : plugins
  }
}

function bundleConfig(minify) {
  return {
    format: 'umd',
    moduleName: 'FelaStyleSheet',
    dest: 'dist/fela-stylesheet' + (minify ? '.min' : '') + '.js',
    sourceMap: !minify
  }
}

rollup.rollup(rollupConfig(process.env.NODE_ENV === 'production')).then(bundle => {
  bundle.write(bundleConfig(process.env.NODE_ENV === 'production'))
  console.log('Successfully bundled fela-stylesheet' + (process.env.NODE_ENV === 'production' ? ' (minified).' : '.'))
}).catch(err => {
  console.error(err)
  process.exit(1)
})
