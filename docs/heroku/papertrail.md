# Heroku平台上实现日志的输出
与本地环境直接输出日志文件不同的是，Heroku平台上不能生成日志文件，所以日志的查看追踪通过第三方插件Papertrail实现，其实施步骤为：
## 添加add-on插件
Papertrail的介绍：papertrail是提供主机日志整合与管理的第三方插件，功能包括实时追踪，搜索，显示应用警告和平台日志等。任意语言或构件包都能生成日志，然后自动转到papertrail上，不需要修改任何代码。
Papertrail可以通过Dashboard直接访问添加或CLI命令附加到Heroku应用上，其命令为:
```
heroku addons:create
```
## 代码配置信息
在项目src/main/resource目录下的application.properties文件中加入如下两行配置语句：
<br>`logging.level.org.springframework.web=DEBUG`
<br>`logging.level.com.heroku.mapper=DEBUG`
<br>第一条是在日志内容中输出DEBUG级别的信息。
<br>第二条是在日志内容中输出SQL文相关的信息。
## 访问日志
 访问或者打开日志的五种方法：
   *  仪表盘（主要）：
   ```
   heroku addons:open papertrail
   ```
   *  利用heroku插件进行追踪和搜索： 
   ```
   heroku plugins:install heroku-papertrail；heroku pt
   ```
   *  通过书签URL访问：
         点击直接查看app在papertrail上面的事件的链接格式为：
         <br>`https://addons-sso.heroku.com/apps/<app name>/addons/papertrail`
         <br>如访问本app的路径为： `https://addons-sso.heroku.com/apps/utadateam/addons/papertrail`
   *  在CLI内输入快捷命令进行访问：
   ```
   heroku addons:open --app utadateam papertrail
   ```
* 下载压缩文档进行查看
## 移除papertrail
在Dashboard内删除或通过命令在CLI内删除，格式为：
`Removing papertrail from <your app name>`如：
```
removing papertrail from utadateam
```
<br>

[参考资料](https://help.papertrailapp.com/kb/how-it-works/event-viewer/)
