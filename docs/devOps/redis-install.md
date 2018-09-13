## windows本地安装redis

[下载地址](https://github.com/ServiceStack/redis-windows/tree/master/downloads)					
							
### 运行 redis-server

打开一个 cmd 窗口 使用cd命令切换到redis目录 运行 
```
redis-server.exe 			
```	
或者直接双击运行redis-server.exe						
						
### 测试
另启一个cmd窗口，原来的不要关闭，不然就无法访问服务端了。						
切换到redis目录下运行 
```
redis-cli.exe -h 127.0.0.1 -p 6379 
```
				
设置键值对 
```
set myKey abc	
```					
取出键值对 
```
get myKey
```
显示abc						
										
### 设置密码
连接服务器							
```
redis-cli.exe -h 127.0.0.1 -p 6379   
```    
设置密码
```     					
config set requirepass <密码>  
``` 
查询密码，无权访问
```               						
config get requirepass     
```
加上密码链接		
```                    						
redis-cli.exe -h 127.0.0.1 -p 6379 -a <密码> 
```  	
查询密码，能看到设置的密码				
```
config get requirepass  
```                       					
