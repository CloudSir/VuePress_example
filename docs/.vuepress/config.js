module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/dist/',
  themeConfig: {
    displayAllHeaders: false,
    activeHeaderLinks: false,
    nav: [ //导航栏
      {
        text: "python",
        items: [
          {
            text: "Python基础",
            link: '/python/'
          },
          {
            text: "Python库",
            link: '/python/lib'
          }
        ]
      },
      {
        text: "java", 
        items: [
          {
            text: "java基础",
            link: '/java/'
          },
          {
            text: "java库",
            link: '/java/lib'
          }
        ]
      }
    ],
    sidebar: { //侧边栏
      '/java/': [
        ["", "Java基础"],
        "lib"
      ],
      '/python/': [
        "",
        "lib"
      ]
    },
    sidebarDepth: 2
  }
}