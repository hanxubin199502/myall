 - 首页 
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/1inx.jpg)
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/2inx.jpg)
 - 发现
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/3inx.jpg)
 - 分类 
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/4inx.jpg)
 - 购物车 
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/5inx.jpg)
 - 我的 
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/6inx.jpg)
 - 二级导航划到顶部悬浮
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/7inx.jpg)
 - 搜索页
 - ![images](https://github.com/hanxubin199502/myall/blob/master/src/assets/8inx.jpg)


git命令

 - git pull  ------拉取远程代码
 - git add -A ------合并代码
 - git commit -m '备注' ------添加备注信息
 - git push -u origin 分支 ------将本地代码推到远程分支

- vue环境搭建打包部署
- 1.首先准备的东西
 - a.安装node js（下载安装node 一路回车就可以）
 - b.安装npm（因为国内使用npm很慢所以需要安装cnpm）
 - c.安装cnpm（npm install -g cnpm --registry=https://registry.npm.taobao.org）
 - d.安装webpack（npm install webpack -g）如果安装失败（cnpm install webpack-cli -g）
说明：检测自己是否安装node npm cnpm使用node -v， npm -v，cnpm -v， webpack -v
- 2.搭建环境
 - a.安装vue（cnpm install vue -g）
 - b.安装vue-cli脚手架（cnpm install vue-cli -g）
 - c.新建一个文件夹存放自己的项目 例：F:\vueapp 点击导航栏输入cmd进入命令窗口
 - d.执行命令vue init webpack firstapp，创建自己的vue项目
 - e.到这一步项目就创建成功了只需要执行cnpm(npm) run dev 启动项目
- 3.项目部署和打包 cnpm run build