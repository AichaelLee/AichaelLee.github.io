

#### 创建新的应用

`heroku create`

#### 扩展Dyno：

`heroku ps:scale web=1`

#### 打开云端应用：

`heroku open`

#### 查看日志：

`heroku logs --tail`


#### 运行一次性Dyno:

`heroku run bash`

#### 配置本地变量：

`heroku config:set ENERGY="20 GeV"`

`heroku config`

#### 使用数据库：

`heroku pg:psql`

#### 本地应用与远端绑定：

`$heroku git:remote -a herokuapp-name`

#### 本地查看当前用户所属：

`heroku auth:whoami`

#### 克隆某个APP：

`heroku git:clone -a yourappname`

