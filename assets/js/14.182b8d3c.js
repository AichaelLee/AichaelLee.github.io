(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{155:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("与本地环境直接输出日志文件不同的是，Heroku平台上不能生成日志文件，所以日志的查看追踪通过第三方插件Papertrail实现，其实施步骤为：")]),t._m(1),a("p",[t._v("Papertrail的介绍：papertrail是提供主机日志整合与管理的第三方插件，功能包括实时追踪，搜索，显示应用警告和平台日志等。任意语言或构件包都能生成日志，然后自动转到papertrail上，不需要修改任何代码。\nPapertrail可以通过Dashboard直接访问添加或CLI命令附加到Heroku应用上，其命令为:")]),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("访问或者打开日志的五种方法：")]),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),a("br"),a("p",[a("a",{attrs:{href:"https://help.papertrailapp.com/kb/how-it-works/event-viewer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"heroku平台上实现日志的输出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#heroku平台上实现日志的输出","aria-hidden":"true"}},[this._v("#")]),this._v(" Heroku平台上实现日志的输出")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"添加add-on插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加add-on插件","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加add-on插件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("heroku addons:create\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"代码配置信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码配置信息","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码配置信息")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在项目src/main/resource目录下的application.properties文件中加入如下两行配置语句：\n"),e("br"),e("code",[this._v("logging.level.org.springframework.web=DEBUG")]),e("br"),e("code",[this._v("logging.level.com.heroku.mapper=DEBUG")]),e("br"),this._v("第一条是在日志内容中输出DEBUG级别的信息。\n"),e("br"),this._v("第二条是在日志内容中输出SQL文相关的信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"访问日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#访问日志","aria-hidden":"true"}},[this._v("#")]),this._v(" 访问日志")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("仪表盘（主要）：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("heroku addons:open papertrail\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("利用heroku插件进行追踪和搜索：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("heroku plugins:install heroku-papertrail；heroku pt\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("通过书签URL访问：\n点击直接查看app在papertrail上面的事件的链接格式为：\n"),e("br"),e("code",[this._v("https://addons-sso.heroku.com/apps/<app name>/addons/papertrail")]),e("br"),this._v("如访问本app的路径为： "),e("code",[this._v("https://addons-sso.heroku.com/apps/utadateam/addons/papertrail")])]),e("li",[this._v("在CLI内输入快捷命令进行访问：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("heroku addons:open --app utadateam papertrail\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("下载压缩文档进行查看")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"移除papertrail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#移除papertrail","aria-hidden":"true"}},[this._v("#")]),this._v(" 移除papertrail")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在Dashboard内删除或通过命令在CLI内删除，格式为：\n"),e("code",[this._v("Removing papertrail from <your app name>")]),this._v("如：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("removing papertrail from utadateam\n")])])])}],!1,null,null,null);e.default=s.exports}}]);