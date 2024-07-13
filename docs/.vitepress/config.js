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
      { text: '🛒Nodejs', link: '/nodejs/Assert', activeMatch: '/nodejs/' },
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
      ],
      '/nodejs/': [
        {
          text: 'Node.js',
          items: [
            { text: 'Assert', link: '/nodejs/Assert' },
            { text: 'Async hooks', link: '/nodejs/Async hooks' },
            {
              text: 'Asynchronous context tracking',
              link: '/nodejs/Asynchronous context tracking'
            },
            { text: 'Buffer', link: '/nodejs/Buffer' },
            { text: 'C++ addons', link: '/nodejs/C++ addons' },
            { text: 'C++ embedder API', link: '/nodejs/C++ embedder API' },
            { text: 'Child process', link: '/nodejs/Child process' },
            { text: 'Cluster', link: '/nodejs/Cluster' },
            { text: 'Command-line API', link: '/nodejs/Command-line API' },
            { text: 'Console', link: '/nodejs/Console' },
            { text: 'Corepack', link: '/nodejs/Corepack' },
            { text: 'Crypto', link: '/nodejs/Crypto' },
            { text: 'Debugger', link: '/nodejs/Debugger' },
            { text: 'Deprecated APIs', link: '/nodejs/Deprecated APIs' },
            { text: 'Diagnostic report', link: '/nodejs/Diagnostic report' },
            { text: 'Diagnostics Channel', link: '/nodejs/Diagnostics Channel' },
            { text: 'DNS', link: '/nodejs/DNS' },
            { text: 'Domain', link: '/nodejs/Domain' },
            { text: 'Errors', link: '/nodejs/Errors' },
            { text: 'Events', link: '/nodejs/Events' },
            { text: 'File system', link: '/nodejs/File system' },
            { text: 'Global objects', link: '/nodejs/Global objects' },
            { text: 'HTTP', link: '/nodejs/HTTP' },
            { text: 'HTTPS', link: '/nodejs/HTTPS' },
            { text: 'Inspector', link: '/nodejs/Inspector' },
            {
              text: 'Internationalization support',
              link: '/nodejs/Internationalization support'
            },
            {
              text: 'Modules_ CommonJS modules',
              link: '/nodejs/Modules_ CommonJS modules'
            },
            {
              text: 'Modules_ ECMAScript modules',
              link: '/nodejs/Modules_ ECMAScript modules'
            },
            {
              text: 'Modules_ node_module API',
              link: '/nodejs/Modules_ node_module API'
            },
            { text: 'Modules_ Packages', link: '/nodejs/Modules_ Packages' },
            { text: 'Net', link: '/nodejs/Net' },
            { text: 'Node-API', link: '/nodejs/Node-API' },
            { text: 'OS', link: '/nodejs/OS' },
            { text: 'Path', link: '/nodejs/Path' },
            {
              text: 'Performance measurement APIs',
              link: '/nodejs/Performance measurement APIs'
            },
            { text: 'Permissions', link: '/nodejs/Permissions' },
            { text: 'Process', link: '/nodejs/Process' },
            { text: 'Punycode', link: '/nodejs/Punycode' },
            { text: 'Query string', link: '/nodejs/Query string' },
            { text: 'Readline', link: '/nodejs/Readline' },
            { text: 'REPL', link: '/nodejs/REPL' },
            { text: 'Stream', link: '/nodejs/Stream' },
            { text: 'String decoder', link: '/nodejs/String decoder' },
            { text: 'Test runner', link: '/nodejs/Test runner' },
            { text: 'Timers', link: '/nodejs/Timers' },
            { text: 'TLS (SSL)', link: '/nodejs/TLS (SSL)' },
            { text: 'Trace events', link: '/nodejs/Trace events' },
            { text: 'TTY', link: '/nodejs/TTY' },
            { text: 'URL', link: '/nodejs/URL' },
            { text: 'Util', link: '/nodejs/Util' },
            { text: 'V8', link: '/nodejs/V8' },
            {
              text: 'VM (executing JavaScript)',
              link: '/nodejs/VM (executing JavaScript)'
            },
            { text: 'Web Crypto API', link: '/nodejs/Web Crypto API' },
            { text: 'Web Streams API', link: '/nodejs/Web Streams API' },
            {
              text: 'WebAssembly System Interface (WASI)',
              link: '/nodejs/WebAssembly System Interface (WASI)'
            },
            { text: 'Worker threads', link: '/nodejs/Worker threads' },
            { text: 'Zlib', link: '/nodejs/Zlib' }
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
