module.exports = {
  title: '治兵的博客',
  description: '治兵的博客',
  themeConfig: {
    nav: [
      { text: '组件系列', link: '/component/recursion' },
      { text: '前端工程', link: '/engineering/eslint' },
    ],
    sidebar: {
      '/component/': [
        'recursion',
        'confirm',
        'paging',
        'sliding-input-bar'
      ],
      '/engineering/': [
        'eslint'
      ]
    }
  }
};
