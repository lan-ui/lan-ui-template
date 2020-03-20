module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: require('./package.json').browserslist
    }){{#rem}},
    require('postcss-pxtorem')({
      rootValue: '16',
      propList: ['*'],
      minPixelValue: 2
    }){{/rem}}
  ]
}
