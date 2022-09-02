<template>
  <div>
    <!-- <aui-fluent-editor v-model='content' content='{"ops":[{"insert":"123\n"}]}'> </aui-fluent-editor> -->
    内容：<br />
    <!-- <p>{{ content }}</p>
    {{ 'html' +  html }} -->
    <div class="all-container">
      <div class="left-container">
        <div v-for="(title, key) in this.navList" :key="key">
          <a :href="'#' + title.title" target="_blank">{{title.title}}</a>
        </div>
      </div>
      <div class="right-container" v-html='html'></div>
    </div>

    <!-- {{this.navList}} -->
    
    

    <!-- <MarkNav :source='markdownContent' /> -->
  </div>
</template>

<script>

// import FluentEditor from '@aurora/vue-fluent-editor'

// import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html'
import str from '../../assets/static'
import MarkdownIt from 'markdown-it'

import MarkdownItToc from 'markdown-it-toc'

import MdItAnchor from 'markdown-it-anchor'

import MdTocDoneRight from 'markdown-it-toc-done-right'

import uslug from 'uslug'

// import MarkNav from 'markdown-navbar'

// import 'markdown-navbar/dist/navbar.css'

export default {
  components: {

    // AuiFluentEditor: FluentEditor

    // markdownIt

    // MarkNav
  },
  mounted() {

    // console.log(str)

    this.navList = this.getTitleList(str)
    console.log('navList', this.navList)
    this.html = this.markdownIt.render(`${str}`)

    // console.log(this.tree(this.html))

    // console.log(this.html)
  },
  data() {
    const markdownIt = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    }).use(MdItAnchor).use(MdTocDoneRight)

    // console.log(markdownIt.render(this.markdownContent))
    
    /*
     * markdownIt.renderer.rules.p = () => {
     *   return '<p>123456</p>'
     * }
     */
    
    /*
     * markdownIt.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
     *   console.log('tokens', tokens)
     *   console.log('idx', idx)
     *   console.log('options', options)
     *   console.log('env', env)
     *   console.log('self', self)
     *   return '<h1 style="color: red;">'
     * }
     * markdownIt.renderer.rules.heading_close = () => {
     *   return '</h1>'
     * }
     */
    
    return {

      // MarkNav,
      navList: [],
      MarkdownItToc,
      markdownIt,
      content: '{"ops":[{"insert":"123"}]}',
      html: '',
      markdownContent: '# SNS通知服务用户手册\n\n' +
        'SNS(Simple Notification Service)服务,为应用提供统一、简单、稳定的通知接口服务,支持短信、邮件，极大简化系统通知模块开发。\n\n' +
        '注意，荣耀租户使用SNS发送短信时，默认只能发送通知类、验证码短信，不能发送营销短信。如果需要发送营销短信，请至少提前一周联系王玉涵进行报备，联系肖畅进行营销短信相关配置。\n\n'
    }
  },
  methods: {
    tree(wrapNode) {
      const root = { children: [] }
      let current = root
      Array.from(wrapNode.children)
        .filter(item => item.localName.indexOf('h') === 0)
        .forEach(item => {
          const obj = { node: item, children: [], parent: undefined }
          while (current !== root && current.node.localName[1] - obj.node.localName[1] !== -1) {
            current = current.parent
          }
          obj.parent = current
          obj.parent.children.push(obj)
          current = obj
        })
      return root.children
    },
    format(x1, htmlencode) {
      return `<span>${htmlencode(x1)}</span>`
    },
    handleNavTree() {
      let navs = this.getTitleList(str)
      console.log(navs)
      let retNavs = []

      // let navLevel = [1, 2, 3]
      
      // let toAppendNavList

      /*
       * navLevel.forEach(level => {
       *   toAppendNavList = this.find(navs, {
       *     level: level
       *   })
       */

      /*
       *   if (retNavs.length === 0) {
       *     retNavs = retNavs.concat(toAppendNavList)
       *   } else {
       *     toAppendNavList.forEach(item => {
       *       // eslint-disable-next-line no-param-reassign
       *       item = Object.assign(item)
       */
            
      //       let parentNavIndex = this.getParentIndex(navs, item.index)

      /*
       *       this.appendToParentNav(retNavs, parentNavIndex, item)
       *     })
       *   }
       * })
       */
      return retNavs
    },
    getTitleList(content) {
      let nav = [];

      let tempArr = [];
      content.replace(/(#+)[^#][^\n]*?(?:\n)/g, function(match, m1) {
        let title = match.replace('\n', '');
        let level = m1.length;
        tempArr.push({
          title: title.replace(/^#+/, '').replace(/\([^)]*?\)/, ''),
          level: level,
          
          // children: [],
          id: uslug(title.replace(/^#+/, '').replace(/\([^)]*?\)/, ''))
        });
      });

      // 只处理二级到四级标题，以及添加与id对应的index值，这里还是有点bug,因为某些code里面的注释可能有多个井号
      nav = tempArr.filter((item) => item.level >= 2 && item.level <= 4);
      let index = 0;
      return (nav = nav.map((item) => {
        item.index = index++;
        return item;
      }));

      /*
       * console.log(content)
       * let nav = []
       * let tempArr = []
       * content.replace(/(#+)[^#][^\n]*?(?:\n)/g, function(match, m1) {
       *   let title = match.replace('\n', '')
       *   let level = m1.level
       *   tempArr.push({
       *     title: title.replace(/^#+/, '').replace(/\([^)]*?\)/, ''),
       *     level: level,
       *     children: []
       *   })
       * })
       */

      /*
       * nav = tempArr.filter(item => item.level <= 2)
       * let index = 0
       * console.log('nav', nav)
       * return nav = nav.map(item => {
       *   item.index = index++
       *   return item
       * })
       */
    },
    find(arr, condition) {
      return arr.filter(item => {
        for (let key in condition) {
          if (Object.prototype.hasOwnProperty.call(condition, key) && condition[key] !== item[key]) {
            return false
          }
        }
        return true
      })
    },
    // eslint-disable-next-line consistent-return
    getParentIndex(nav, endIndex) {
      // eslint-disable-next-line id-length
      for (let i = endIndex - 1;i >= 0;i--) {
        if (nav[endIndex].level > nav[i].level) {
          return nav[i].index
        }
      }
    },
    appendToParentNav(nav, parentIndex, newNav) {
      let index = this.findIndex(nav, {
        index: parentIndex
      })
      
      nav[index].children = nav[index].children.concat(newNav)
    },
    findIndex(arr, condition) {
      let ret = -1
      // eslint-disable-next-line consistent-return
      arr.forEach((item, index) => {
        for (let key in condition) {
          if (Object.prototype.hasOwnProperty.call(condition, key) && condition[key] !== item[key]) {
            return false
          }
        }
        ret = index
      })
      return ret
    }
  }
}
</script>

<style>
.all-container {
  width: 800px;
  height: 1000px;
  border: 1px solid black;
  position: relative;
}
.all-container .right-container {
  width: 500px;
  height: 100%;
  position: absolute;
  right: 0;
  padding-left: 20px;
  /* overflow-y: auto; */
  /* border: 1px solid red; */
  
}
.all-container .right-container .table-of-contents {
  width: 300px;
  height: 100%;
  /* border: 1px solid rgb(210, 210, 210); */
  position: absolute;
  left: -300px;
}
.all-container .right-container .table-of-contents ol li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.all-container .right-container .table-of-contents ol {
  /* margin-left: 20px; */
}
</style>
