const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['sass-loader'],
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
};
