module.exports = [
  {
    entry: "./index.js",
    output: {
      filename: "bundle.js"
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            }
          },
        ]
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
      },]
    },
  },
];
