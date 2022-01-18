<template>
  <div :class="containerClasses">
    <div class="edit">
      <div class="html-edit" ref="htmlEditRef">
        <!-- 这是html代码编辑区域 -->
        <pre v-html="htmlEditPre"></pre>
      </div>
      <div class="css-edit" ref="cssEditRef">
        <!-- 这是css代码编辑区域 -->
        <pre v-html="styleEditPre"></pre>
      </div>
    </div>
    <div class="preview">
      <!-- 这是预览区域，登录最终会被画到这里噢 -->
      <div class="preview-html" v-html="previewHtmls"></div>
      <!-- 这里样式区域 -->
      <div v-html="previewStyles"></div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import htmls from './config/htmls'
import styles from './config/styles'
import { isMobile } from '../../common/utils'

const htmlStep0 = `<!-- htmlStep0 -->`

export default {
  name: 'newYear2022',
  data () {
    return {
      // html代码展示片段
      htmlEditPre: '',
      htmlEditPreSource: '',
      // css代码展示片段
      styleEditPre: '',
      // 实际起作用的css
      previewStylesSource: '',
      previewStyles: '',
      // 预览的html
      previewHtmls: '',

    }
  },
  computed: {
    containerClasses () {
      // 做一个简单的适配
      return [
        'container',
        isMobile() ? 'container-mobile' : ''
      ]
    }
  },
  async mounted () {
    await this.doHtmlStep(0)
    await this.doHtmlStep(1)
    await this.doStyleStep(0)
    await this.doStyleStep(1)
    await Promise.all([ this.doHtmlStep(2, htmlStep0), this.doEffectHtmlsStep(2) ])
    this.doStyleStep(2)
  },
  methods: {
    doStyleStep (step) {
      // 1. 添加样式代码到展示区域
      // 2. 添加样式代码到去作用区域
      // debugger
      const htmlEditRef = this.$refs.htmlEditRef
      const cssEditRef = this.$refs.cssEditRef

      return new Promise((resolve) => {
        const styleStepConfig = styles[ step ]
        let previewStylesSource = this.previewStylesSource
        let start = 0
        let timter = setInterval(() => {
          let char = styleStepConfig.substring(start, start + 1)

          previewStylesSource += char

          if (start >= styleStepConfig.length) {
            console.log('css结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.previewStylesSource = previewStylesSource
            this.styleEditPre = Prism.highlight(previewStylesSource, Prism.languages.css)
            this.previewStyles = `
              <style>
                ${previewStylesSource}
              </style>
            `
            start += 1

            htmlEditRef.scrollTo({
              top: 100000,
              left: 0,
            })
            cssEditRef.scrollTo({
              top: 100000,
              left: 0,
            })
          }
        }, 10)
      })
    },
    doEffectHtmlsStep (step, insertStep = 'xxxxxxxxx') {
      return new Promise((resolve) => {
        const htmlStepConfig = htmls[ step ]
        let previewHtmls = this.previewHtmls
        const index = previewHtmls.indexOf(insertStep)
        const stepInHtmls = index !== -1
        
        let frontHtml = stepInHtmls ? previewHtmls.slice(0, index + insertStep.length) : previewHtmls
        let endHtml = stepInHtmls ? previewHtmls.slice(index + insertStep.length) : ''
        
        let start = 0
        let chars = ''
        let timter = setInterval(() => {
          let char = htmlStepConfig.substring(start, start + 1)

          chars += char

          previewHtmls = frontHtml + chars + endHtml

          if (start >= htmlStepConfig.length) {
            console.log('html结束')
            clearInterval(timter)
            resolve(start)
          } else {
            // this.previewHtmls = htmlEditPreSource
            this.previewHtmls = previewHtmls
            start += 1
          }
        }, 10)
      })
    },
    doHtmlStep (step, insertStep = 'xxxxxxxxx') {
      return new Promise((resolve) => {
        // debugger
        const htmlStepConfig = htmls[ step ]
        let htmlEditPreSource = this.htmlEditPreSource
        const index = htmlEditPreSource.indexOf(insertStep)
        const stepInHtmls = index !== -1
        
        let frontHtml = stepInHtmls ? htmlEditPreSource.slice(0, index + insertStep.length) : htmlEditPreSource
        let endHtml = stepInHtmls ? htmlEditPreSource.slice(index + insertStep.length) : ''
        
        let start = 0
        let chars = ''
        let timter = setInterval(() => {
          let char = htmlStepConfig.substring(start, start + 1)

          chars += char

          htmlEditPreSource = frontHtml + chars + endHtml

          if (start >= htmlStepConfig.length) {
            console.log('html结束')
            clearInterval(timter)
            resolve(start)
          } else {
            this.htmlEditPreSource = htmlEditPreSource
            this.htmlEditPre = Prism.highlight(htmlEditPreSource, Prism.languages.html)
            start += 1
          }
        }, 10)
      })
    },
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

.container-mobile{
  flex-direction: column;
}

.container-mobile .edit{
  width: 100%;
  height: 50%;
}

.container-mobile .preview{
  width: 100%;
}
</style>