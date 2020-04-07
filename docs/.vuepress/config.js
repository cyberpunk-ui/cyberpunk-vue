module.exports = {
  title: 'Cyberpunk Vue',
  description: 'a dark mode-first UI library',
  theme: 'default-prefers-color-scheme',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Cyberpunk Vue',
      description: 'a dark mode-first UI library'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Cyberpunk Vue',
      description: 'Vue驱动的黑暗风格UI库'
    }
  },
  themeConfig: {
    defaultTheme: { light: [6, 18], dark: [18, 6] },
    smoothScroll: true,
    docsRepo: 'cyberpunk-ui/cyberpunk-vue',
    docsDir: 'docs',
    editLinks: true,
    postcss: {
      plugins: [
        require('css-prefers-color-scheme/postcss'),
        require('autoprefixer')
      ]
    },
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {
          apiKey: '11b03ff97f0d7bb7be5d6e34e49d5d7c',
          indexName: 'cyber_punkui'
        },
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'GitHub', link: 'https://github.com/cyberpunk-ui/cyberpunk-vue' },
        ],
        sidebar: [
          {
            title: 'Guide',
            collapsable: false,
            sidebarDepth: 1,
            children: [
              '/guide/',
              '/guide/get-started',
            ]
          },
          {
            title: 'Components',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              '/components/button',
            ]
          },
        ],
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {
          apiKey: '11b03ff97f0d7bb7be5d6e34e49d5d7c',
          indexName: 'cyber_punkui'
        },
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '文档', link: '/zh/guide/' },
          { text: 'GitHub', link: 'https://github.com/cyberpunk-ui/cyberpunk-vue' },
        ],
        sidebar: [
          {
            title: '文档',   // 必要的
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              '/zh/guide/',
              '/zh/guide/install',
              '/zh/guide/get-started',
            ]
          },
          {
            title: '组件',
            collapsable: false,
            sidebarDepth: 0,
            children: [
              {
                title: '通用',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/zh/components/button',
                  '/zh/components/sticky',
                  '/zh/components/scroll',
                ]
              },
              {
                title: '布局',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/zh/components/grid',
                  '/zh/components/layout',
                ]
              },
              {
                title: '导航',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/zh/components/menu',
                  '/zh/components/pagination',
                ]
              },
              {
                title: '数据录入',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/zh/components/cascader',
                  '/zh/components/date-picker',
                  '/zh/components/input',
                  '/zh/components/upload',
                ]
              },
              {
                title: '数据展示',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                  '/zh/components/carousel',
                  '/zh/components/collapse',
                  '/zh/components/tabs',
                  '/zh/components/message',
                  '/zh/components/popover',
                  '/zh/components/table',
                  '/zh/components/validate',
                ]
              },
            ]
          },
        ],
      }
    }
  },
  plugins: [
    ['@vuepress/nprogress'],
    ['@vuepress/back-to-top'],
    ['@vuepress/active-header-links'],
    ['@vuepress/last-updated'],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-91622737-2'
      }
    ],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}