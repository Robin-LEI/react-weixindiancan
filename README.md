# 交互导图

# Mock
1. 在config>paths.js进行配置
2. 安装body-parser，需要在webpackDevServer.config.js中进行配置

# 二级路由
1. 组件往外抛的时候不再抛组件，而是抛路由
2. 一级路由采用懒加载形式

# 使用rem
1. 相对单位，相对html根元素

# 注意默认情况下后缀必须是.module.less 才能用 css-module 的写法

# 带参路由
1. http://localhost:3000/?userId=orH6d1BlTsF3LiogJRJ3322BPREaSzz8&shopId=b9a5eea53c8d4f154174dbff53892e24#/welcome/shop

# 多功能接口

# git tag
1. 版本管理
2. 任何应用程序在发布的时候都应该有一个版本号
3. NNN.abc.xxx
   1. NNN：系统有重大更新
   2. abc：小更新，增加新功能
   3. xxx：修复bug，修改文字不对，修改图片不对等
4. 在commit之后，做tag的操作
5. git show v1.0.0 查看之前的版本改了什么


# 全量发布好于增量发布，每次发布新的时候，对之前的功能进行回测是有必要的

# useMemo
1. 如果依赖项是对象，那么只有当地址再次改变的时候才会再次重新执行
2. 如果不写依赖项，每次组件更新的时候会再次执行
