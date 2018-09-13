## ubuntu gitlab安装

### 安装openssh和postfix

```
sudo apt-get install curl openssh-server ca-certificates postfix
```

### 执行官网的脚本

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | sudo bash
```
### 安装gitlab
```
sudo apt-get install gitlab-ce
```
### 修改配置然后重新启动

* 配置域名或IP： 
```
sudo vim /etc/gitlab/gitlab.rb
``` 
找到`External_URL`把它改为本机IP
* 配置服务：
```
sudo gitlab-ctl reconfigure
```

## gitlab汉化

### 找到对应版本的汉化包（如本机安装了10.1.1，则在相应的分支下找到汉化包）
[汉化包](https://gitlab.com/xhang/gitlab)

### 1.首先新建一个文件夹，克隆安装包

```
git clone https://gitlab.com/xhang/gitlab.git
```
### 2.然后差分并生成diff,两个diff的结果就是需要安装的汉化包

```
sudo git diff origin/10-1-stable..10-1-stable-zh > /tmp/10.1.diff
```
### 3.关闭gitlab服务

```
sudo gitlab-ctl stop
```
### 4.进入目录

```
cd /opt/gitlab/embedded/service/gitlab-rails
```
### 5.安装diff包

```
git apply /tmp/10.1.diff
```
### 6.启动

```
sudo gitlab-ctl start
```