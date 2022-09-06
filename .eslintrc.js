module.exports = {
  // 代表eslitn是否是根
  root: true,
  // 环境变量
  env: {
    node: true, // 开启node的环境变量,
    browser: true // 是否开启浏览器的环境变量
  },
  // 继承
  // airbnb
  // vue
  // plugin:vue ---> eslint-plugin-vue configs的 essential
  // @vue/eslint-config-standard
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    // eslit的解析器, 也是有一个包
    parser: '@babel/eslint-parser'
  },
  // 自定义规则
  //  新增或者关闭一些规则则
  // off/0是关闭, error,2错误, warn,1 警告
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'vue/multi-word-component-names': 0
  }
}

//
// 关闭规则的方式一: eslintrc里使用rules
// 关闭规则的方式二:
//  - /* eslint-disable */ 从此条注释往下, 禁用eslint规则
//  -  /* eslint-disable-next-line */  禁用 下一行eslint规则
//  - /* eslint-disable-line */ 禁用 本行eslint规则
//
