<template>
  <div class="markdown-content">
    <div class="left-content">
      <div v-for="(title, key) in navList" :key="key" class="title-content">
        <span v-for="i in title.level-2" :key="i">&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <a :href="'#'+(title.id).trim()">{{title.title}}</a>
      </div>
    </div>
    <div class="right-content">
      <div v-html="html"></div>
    </div>
  </div>

  
</template>

<script>
// import Showdown from 'showdown'
// import ShowdownToc from 'showdown-toc'
// import showdownToc from 'showdown-toc'
// import showdownToc from 'showdown-toc'
// import { md, toc } from '../utils/remarkable_helper'
import { marked } from 'marked'
import uslug from 'uslug'
import axios from 'axios'
// import MarkdownIt from 'markdown-it'
// import MarkdownItAnchor from 'markdown-it-anchor'
// import MarkdownItTocDoneRight from 'markdown-it-toc-done-right'
// import str from '../assets/static.js'
let rendererMD = new marked.Renderer()
marked.setOptions({
  renderer: rendererMD,
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
})

rendererMD.heading = function(text, level, raw) {
  // console.log('text', text)
  // console.log('raw', raw)
  let str = uslug(raw)
  return `<h${level} id=${str} class='content-header'>${text}</h${level}>`
}

rendererMD.table = function(header, border) {
  console.log('header', header)
  console.log('border', border)
  return `<table class='content-table' border='1'><thead>${header}</thead><tfoot>${border}</tfoot></table>`
}


export default {
  mounted() {
    // const md = new MarkdownIt({
    //   html: false,
    //   xhtmlOut: true,
    //   typographer: true
    // }).use(MarkdownItAnchor)
    // .use(MarkdownItTocDoneRight)
    // const content = "# markdown-it rulezz!\n\n[toc]\n## with markdown-it-toc-done-right rulezz even more!"
    axios({url: '/file.md'})
    .then(res => {
      console.log('res', res)
      this.navList = this.getTitleList(res.data) 
      this.html = marked(res.data)
    })
    // this.navList = this.getTitleList(str)
    // console.log(this.navList)
    // const result = marked(str)
    // this.html = result
    // console.log(result)
    
//     const toc = [
//     { anchor: 'header-1', level: 1, text: 'header 1' }, // # header 1
//     { anchor: 'header-2', level: 2, text: 'header 2' }, // # header 1
//     { anchor: 'header-3', level: 3, text: 'header 3' }, // # header 1
//     { anchor: 'header-4', level: 4, text: 'header 4' }, // #### header 4
    
// ]
//     const showdown = new Showdown.Converter({ extensions: [showdownToc({ toc })] })
//     const result = showdown.makeHtml(content)
//     this.html = result
//     console.log(result)
    // const markdonwContent='这里是markdonw文章内容';
    // const tocMarkDown = '\n\n---\n**文章目录**\n' + toc(markdonwContent).content + '\n\n---'; //自动生成的目录
    // const rebuildMarkDown = tocMarkDown + markdonwContent; // 目录+文章内容
    // console.log(md.render(rebuildMarkDown)); //remarkable 渲染全部markdown 文本

    // const toc = []
    // const showdown = new Showdown.Converter({extensions: [showdownToc({toc})]})
    // const result = showdown.makeHtml(this.content)
    // this.html = result
    // console.log(result)
    // console.log(toc)

  },
  data() {
    return {
      navList: [],
      html: ''
    }
  },
  methods: {
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
  }

}
</script>

<style >
  .markdown-content {
    width: 1000px;
    height: 600px;
    border: 1px solid black;
    display: flex;
    
  }
  .markdown-content .left-content {
    width: 300px;
    height: 100%;
    border: 1px solid rgb(210, 210, 210);
    text-align: start;
  }
  .markdown-content .left-content .title-content {
    width: 100%;
    min-height: 20px;
    padding: 3px 5px;
  }
  .markdown-content .left-content .title-content a {
    text-decoration: none;
    color: rgb(97, 97, 255);
  }
  .markdown-content .right-content {
    width: 700px;
    border: 100%;
    /* border: 1px solid blue; */
    overflow: auto;
    text-align: start;
    padding-left: 5px;
  }
  .markdown-content .right-content .content-header {
    color: rgb(97, 97, 255);
  }
  .markdown-content .right-content .content-table {
    border-collapse: collapse;
    border: 1px solid rgb(210, 210, 210);
  }
  .markdown-content .right-content .content-table thead {
    background-color: antiquewhite;
  }
  .markdown-content .right-content .content-table th {
    min-width: 100px;
    padding: 5px;
  }
  .markdown-content .right-content .content-table td {
    padding: 5px;
  }
  
</style>
