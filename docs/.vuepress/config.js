module.exports = {
    base: '/',
    dest: 'dist',
    title: '总结文档',
    description: '学习总结',
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: false,
    themeConfig: {
        repo: 'Aichaellee/aichaellee.github.io',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '申请修改此页',
        lastUpdated: '上次更新',
        nav: [
            {
                text: '个人博客',
                link: 'www.aichaellee.com'
            }
        ],
        sidebar: [
            {
                title: 'Heroku',
                collapsable: true,
                children: [
                    ['heroku/cloudIntroduction','云计算简介'],
                    ['heroku/12factor','云应用准则'],
                    ['heroku/', 'Heroku'],
                    ['heroku/simIntroduction','起步'],
                    ['heroku/papertrail','查看日志'],
                    ['heroku/frequenAsked','常见问题'],
                    ['heroku/frequentCommand','常用命令'],
                    ['heroku/one-off-dyno','一次性dyno'],
                    ['heroku/web-worker-rabbit','web-worker通信机制']
                    
                ]
            },
            {
                title: '开发规范',
                collapsable: false,
                children: [
                    
                    ['project/projectGuildline','项目规范']
                    
                ]
            },
            {
                title: 'DevOps',
                collapsable: false,
                children: [
                    'devOps/installGitlab',
                    ['devOps/docker','docker了解'],
                    'devOps/redis-install',
                    ['devOps/heroku-gitlab-ci','Heroku与gitlab持续集成']
                    
                ]
            },
            {
                title: '前端',
                collapsable: false,
                children: [
                    ['fronted/vue-interview', 'vue面试题']
                    
                ]
            },
            {
                title: 'AWS',
                collapsable: false,
                children: [
                    ['fronted/vue-interview', 'Introduction']
                    
                ]
            },
            {
                title: 'java',
                collapsable: true,
                children: [
                    ['java/java-interview', '面试题'],
                    ['java/java-stream', '流操作'],
                    ['java/http-related','网络相关'],
                    ['java/mybatis-related','mybatis']
                    
                ]
            }
            
            
        ]
    }
}
