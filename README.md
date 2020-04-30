# 项目说明
## 流程过程
- 使用每个分支开发案例，逐步提交
- 在`master`分支合并其他开发的功能分支，将每个分支的所有内容合并为一个提交
```bash
git merge --squash feature/xxx
git commit  -m "message for feture/xxx"
```
- 主干上只能看到每一次的进展，分支上能看到详细的提交步骤信息

## 分支说明
- feature/hello-page 增加静态服务器支持和动态模板支持
- feature/config-support 增加环境配置的支持
- feature/mongodb-support 增加mongodb的支持
- feature/validation-support 增加数据校验的支持
- feature/rabbitmq-support 增加rabbitmq的支持

#  项目使用方法
## 安装

```bash
$ npm install
```

## 运行

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 测试

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
