# 各网站的文档编辑方式：
* CSDN：富文本编辑器、markdown编辑器
* 掘金：富文本编辑器、markdown编辑器
* 简书：富文本编辑器、markdown编辑器
* 知乎：富文本、支持markdown
* 牛客：富文本编辑器、markdown编辑器
* 力扣：markdown编辑器

# 富文本与markdown：
* 功能相近
* 富文本：
  * 在页面中进行文档的编辑，以不同格式的数据形式保存于数据库中
* markdown：
  * 在md编辑器或者页面中进行文档的编辑，保存为字符串形式存储于数据库中
* 都是返回字符串形式数据，通过组件进行解析渲染（性能相近，差距体现在编写文档时候的区别，如果是返回文件的形式，则需要调用webpack解析器解析markdown文件再通过markdown解析组件进行渲染，前端性能开销较大）

## 富文本实现方式
* 使用AUI的FluentEditor（数据保存格式为Delta格式）或者RichText（数据保存格式为HTML格式）编辑富文本
* 存储HTML形式或者Delta形式的字符串返回
* HTML通过v-html进行渲染，Delta格式通过quill-delta-to-html进行渲染

## markdown实现方式
* 把markdown转化为markdown字符串进行存储
* 返回markdown字符串，通过markdown解析组件解析出来进行展示

### 常用的markdown解析组件：
* marked.js：相对稳定
* vue-markdown：版本迭代更新少，下载量少
* vue的vuePress(使用markdown-it)：扩展较多,更加灵活

### 解析头部导航栏组件：
* markdown-navbar（只支持React）
* markdown-toc (不支持import)
* markdown-it-toc-done-right（导航栏会嵌入内容中，不好控制）
* 自定义渲染标题导航

### markdown样式组件
* highlight.js
* github-markdown-css
* 自定义渲染器

# 结论
* 初定于使用markdown的方式实现嵌入链接文档，相对于富文本来说可扩展性更高，富文本局限在页面进行编写
* 初定方案实现为：markdown-it（解析markdown）+ 自定义渲染样式
