const withCss = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');

module.exports = withBundleAnalyzer(withCss({
  target: "serverless",
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'server',
      reportFilename: '../../bundles/server.html',
    },
    browser: {
      analyzerMode: 'server',
      reportFilename: '../bundles/client.html',
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/i,
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          publicPath: './',
          outputPath: 'static/css/',
          name: '[name].[ext]',
        },
      },
    });
    config.module.rules.push({
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
          'next/babel',
        ],
      },
    });

    return config;
  },
  cssModules: true,
  pageExtensions: ['jsx', 'js'],
  serverRuntimeConfig: {
  },
  publicRuntimeConfig: {
  },
}));
