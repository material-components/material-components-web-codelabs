const autoprefixer = require('autoprefixer');

module.exports = [
  {
    entry: './app.scss',
    output: {
      // This is necessary for webpack to compile
      // But we never use style-bundle.js
      filename: 'style-bundle.js',
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            // TODO(acdvorak): Why can't we use `file-loader` in MDC?
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [autoprefixer()],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              // TODO(acdvorak): Update other codelabs (and MDC docs) to use `includePaths` instead of `importer`
              includePaths: ['./node_modules'],
            }
          },
        ]
      }]
    },
  },
  {
    entry: "./app.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
  }
];
