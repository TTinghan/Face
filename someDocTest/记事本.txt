【跳板机密码】：
EJihE8ZZMDGPV71o

/**
 * @fileOverView: 对文件的描述
 * @author: tingting.han
 * @date: 20/11/23.
 */

tail -f error.log & tail -f com.log|grep 'ERROR'  & tail -f jsError.log
含义分别是路由及node报错、请求报错（404、400、status < 0）、js报错

跳板机登录后，需要查多个机器的日志：
atnodes "cat /home/q/www/superstar/logs/com.log|grep '测评'" l-beiins[1-4].fe.p1

【启动去哪儿保险】：http://local.b.qunar.com:3000/index#NbmpAgent
【启动service后台--登录】:http://local.11bee.com:3000/iservice/login?isBusiness=1
【启动service后台--壳子】：http://local.11bee.com:3000/iservice/index#nav=5&tabs=304
本地的node切换默认版本：
nvm alias default v4.8.4

正则匹配:
https://jex.im/regulex/#!flags=&re=(%3E)(%5B%5E%3E%5D%2B)(%3C%5B%5C%2F%5D%3F%5Cw%2B.*%3E)

sudo权限进入/usr/bin/目录，删除node: 
rm -f node

使用软链:(node版本不适配时报错的情况)
sudo  ln -s /home/sysadmin/.nvm/versions/node/v4.8.4/bin/node /usr/bin/node

sudo权限，进入11beeInsurance目录：
ykit s（启动服务）

superstart:用webpack脚本启动node服务

大客户端：http://bao.qunar.com:3000/index#Mine


查看当前机器上服务是否启动：
sudo权限下：查看端口占用
[root@l-bee4.fe.beta.p1 /etc/init.d]# lsof -i:3003
COMMAND  PID   USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
node    5693 tomcat   32u  IPv6 49481707      0t0  TCP *:cgms (LISTEN)

查看占用端口的进程：
[root@l-bee4.fe.beta.p1 /etc/init.d]# ps -aux|grep 5693
tomcat    5693  0.0  1.1 845636 42748 ?        Sl   10:41   0:01 /home/q/www/node/bin/node /home/q/www/superstar/ibooking_node/bin/beta -l /home/q/www/superstar/logs_ibooking
root     11978  0.0  0.0 112708   972 pts/0    S+   20:45   0:00 grep --color=auto 5693


snail：b环境 10.64.17.48


chown tomcat:tomcat logs_imoney/ : 修改文件所属组，所属用户

查看当前服务在哪里打日志，可以通过查看/etc/init.d目录下的脚本文件，
启动脚本 [root@l-bee2.fe.beta.p1 /etc/init.d]# service 11bee_imoney start
停止脚本 [root@l-bee2.fe.beta.p1 /etc/init.d]# service 11bee_imoney stop
不打印日志，说明当前的启动服务角色可能和当前日志文件所属不一致，需要更改所属：chown tomcat:tomcat logs_imoney/

团购external=11bee_agent_group
B2B external=11bee_agent_nature

3000:  小贝保险   →本地日志看 logs
3001 :pdf     
3002: 专家后台 
3003: ibooking(代填单) →本地日志看 logs_ibooking
3004: imoney(收银台) 
3006: colosseum(保二当家)
3008: 树洞

小程序打本地：local: 'http://local.beiins.com:3000',
知识中心访问地址：http://service-a.beta.corp.11bee.com:3000/knowledgecenter/admin/view/knowledge/edit/create


backup日志查看：
[tingting.han@l-buffer-11-1.ops.cn2 ~]$ ssh l-backup1.ops.p1
[tingting.han@l-backup1.ops.p1 ~]$ cd /data1/biz_log_collect/fe_beiins

树洞：
const local = 'http://local.beiins.com:3008/starlink';
活动登录入口：http://local.beiins.com:3008/starlink/tree?activityId=active_20200512142652988741&spmHue=911b31d3917d011ead5edf977cbcc2dd
钱包：
http://local.beiins.com:3008/starlink/tree/myWallet?activityId=active_20200512142652988741&spmHue=911b31d3917d011ead5edf977cbcc2dd

授权回来了：后面拼接state=afterUserInfo

1、树洞小程序：tree_shell
账号：xiaochen.zhou@11bee.com
密码：11bee2020
2.小贝保险：cowry
账号：xiaochengxu@11bee.com
密码：11bee.com
3.保二当家: ibroker
账号：ying.wang@11bee.com
密码：247046248wait






