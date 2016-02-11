var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};

module.exports = {
  entry: './src/ComboInput',

  output: {
    path: './dist/',
    filename: 'ComboInput.js',
    library: 'ComboInput',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  externals: {
    'react': reactExternal,
    'classnames': 'classnames'
  },

  module: {
    loaders: [
      { test: /.jsx?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
};
