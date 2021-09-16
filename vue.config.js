/*module.exports = {
  configureWebpack: {
    resolve: { //解决路径相关的问题
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
      },
    },
  },
}*/
//在webstorm 中使用下面的可以有一个完美的索引支持
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('network', resolve('src/network'))
      .set('views', resolve('src/views'))
    // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))
  }
}
