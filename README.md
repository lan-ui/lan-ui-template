# hx-ui-template

vue-cli < 3 快速使用hx-ui模版创建新项目

## 安装
```shell
私有gitlab上下载hx-ui-template【http://106.38.93.196:8081/hx-ui/hx-ui-template】
git clone http://106.38.93.196:8081/hx-ui/hx-ui-template.git
解压出的文件夹放本地地址【C:\Users\用户\.vue-templates（隐藏文件）】 
vue init hx-ui-template projectName --offline  //使用本地安装，目前代码未开源  
cd projectName  
npm install  
npm run dev  
```

## 完整配置说明
- Project name (XXXX) **项目名称**
- Project description (A Vue.js project) **项目描述**
- Author （XXXXX）**作者**
- Runtime + Compiler: recommended for most users  **运行时+编辑器**
- Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific H
TML) are ONLY allowed in .vue files - render functions are required elsewhere **仅运行时**

-------------------------------------------- 

- Use post-compile? (Y/n) **是否使用后编译**
- Import type (Use arrow keys) **选择使用引入方式**
    - partly, import component on demand, which makes the size of imported code ligh
ter  **按需引入模块**
    - fully, import all the components **全部引入**
- Custom theme? (Y/n) **是否自定义主题**
- Use rem layout? (Y/n) **是否自定义主题**

--------------------------------------------

- Install vue-router? (Y/n) **是否安装vue-router**
- Use ESLint to lint your code? (Y/n) **是否使用ESLint代码检测**
    - Standard (https://github.com/standard/standard) **js标准格式**
    - Airbnb (https://github.com/airbnb/javascript) **github地址说是JavaScript最合理的方法**
    - none (configure it yourself) **自己配置**
- Set up unit tests (Y/n) **是否安装单元测试**
    - Jest **使用jest工具**
    - Karma and Mocha **使用Karma工具**
    - none (configure it yourself)  **自己配置**
- Setup e2e tests with Nightwatch? (Y/n) **是否安装e2e测试**

## 组件应用
- [参考文档说明及示例](http://sales-int.ihxlife.com/hualifeui/docs/index.html)
- 项目全部引入
    - 应用场景：业务组件功能使用较多，或使用整套UI样式
    - 默认安装时已经引入，直接根据文档说明使用即可
- 按需引入
    - 只需要个别的功能（如日期，地区选择等）
    - 引入方式（入口main.js中）

    ```js
    import { Style,HxLocation } from 'hx-ui'
    Vue.use(Style)
    Vue.use(HxLocation)
    ```
    
    - Style模块为样式模块，必须引入（不引入会导致样式问题）

## 问题反馈
[组件库问题提交](http://106.38.93.196:8081/hualife/hx-ui/issues)  
[组件库-模版问题提交](http://106.38.93.196:8081/hx-ui/hx-ui-template/issues)