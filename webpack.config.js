module.exports = function (webpackConfig, env) {
  // 对roadhog默认配置进行操作，比如：
  if (env === 'development') {
      // webpackConfig.plugins.push('...')
  }
  webpackConfig.output = {
    // library: 'dvaApp',
    // libraryTarget: 'umd',
    // jsonpFunction: `webpackJsonp_dvaApp`,
  }
  return webpackConfig;
}
