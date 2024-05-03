# 部署 Django 项目

## Windows 环境部署

### 环境准备

- 安装 Internet Information Services (IIS)和 CGI

![IIS](/images/hel4FUTO7U.png)

![CGI](/images/eGLsPNWsA8.png)

- 安装 wfastcgi

```sh
$ pip3 install wfastcgi
```

以管理员身份启动wfastcgi服务，将结果中的路径复制保留，后面配置处理程序映射时需要

```sh
$ wfastcgi-enable
```

### 配置站点

- 打开IIS，复制你的Django项目<Badge type="tip" text="记得设置DEBUG=False" />到对应的站点目录下

![上传项目](/images/Ujn7jijvT9.png)

- 处理程序映射

![处理程序映射](/images/8iKEh3ti2Q.png)

这里可执行文件填之前启动wfastcgi服务时复制的路径，需要注意的是，如果你是运行的虚拟环境，前面的python解释器路径需要更换成项目下虚拟环境里的python解释器路径
![具体配置](/images/Fv4I69DWMR.png)

- 设置应用程序池

![设置应用程序池](/images/nUHWEXbWkF.png)

- FastCGI设置

![FastCGI](/images/LAPjZGOx5a.png)

WSGI_HANDLER
django.core.wsgi.get_wsgi_application()

PYTHONPATH
你的项目目录

DJANGO_SETTINGS_MODULE
你的项目名.settings

![环境变量](/images/BsknzIukXP.png)

### 启动站点