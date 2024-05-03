import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 构建配置
  base: '/docs/',

  // 站点配置
  title: 'VitePress入门教程',
  titleTemplate: 'VitePress模板',
  description: '快速搭建文档站点',
  head: [['link', { rel: 'icon', href: '/docs/favicon.ico' }]],

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    siteTitle: 'VitePress入门教程',
    search: {
      provider: 'local'
    },
    // 导航栏
    nav: [
      { text: '🎈VitePress入门教程', link: '/vitepress/', activeMatch: '/vitepress/' },
      { text: '⚡Vue项目搭建教程', link: '/guide/', activeMatch: '/guide/' },
      { text: '🚩Vue优化', link: '/vue/', activeMatch: '/vue/' },
      { text: '🔥实践工具', link: '/sundry/tools/', activeMatch: '/sundry/tolls/' },
      { text: '🐋Django', link: '/django/', activeMatch: '/django/' },
      {
        text: '🚀外链',
        link: 'https://www.baidu.com',
        target: '_blank',
        rel: 'external'
      }
    ],
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress', ariaLabel: 'github' }
    ],
    // 侧边栏
    sidebar: {
      '/guide/': [
        {
          text: 'Vue后台管理项目从零搭建',
          items: [
            { text: '引言', link: '/guide/' },
            { text: '安装Vue3', link: '/guide/one' },
            { text: '项目配置', link: '/guide/two' }
          ]
        }
      ],
      '/sundry/tools/': [
        {
          text: '实践工具',
          items: [
            {
              text: '表单验证',
              items: [
                {
                  text: 'ajv',
                  link: '/sundry/tools/ajv'
                },
                {
                  text: 'async-validator',
                  link: '/sundry/tools/async-validator'
                }
              ]
            }
          ]
        }
      ]
    },
    // 其它
    outline: {
      label: '目录',
      level: 'deep'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Arcuchi Co., Ltd.'
    }
  },

  // 插件配置
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()],
    build: {
      chunkSizeWarningLimit: 2000
    }
  }
})
