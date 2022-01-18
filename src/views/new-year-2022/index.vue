<template>
  <div :class="containerClasses">
    <div class="edit">
      <div class="html-edit" ref="htmlEditRef">
        <!-- 这是html代码编辑区域 -->
        <pre v-html="htmlEditPre" ref="htmlEditPreRef"></pre>
      </div>
      <div class="css-edit" ref="cssEditRef">
        <!-- 这是css代码编辑区域 -->
        <pre v-html="styleEditPre"></pre>
      </div>
    </div>
    <div class="preview">
      <!-- 这是预览区域，灯笼最终会被画到这里噢 -->
      <div class="preview-html" v-html="previewHtmls"></div>
      <!-- 这里是样式真正起作用的地方，密码就隐藏... -->
      <div v-html="previewStyles"></div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs'
import htmls from './config/htmls'
import styles from './config/styles'
import { isMobile, delay } from '../../common/utils'

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
    // 1. 打招呼
    await this.doHtmlStep(0)
    // 2. 说明主旨
    await this.doHtmlStep(1)

    await delay(500)

    // 3. 第一步声明
    await this.doHtmlStep(2)

    await delay(500)
    // 4. 创建写代码的编辑器
    await this.doHtmlStep(3)
    await delay(500)
    await this.doHtmlStep(4)
    await delay(500)
    await this.doStyleStep(0)
    await delay(500)
    await this.doStyleStep(1)
    await delay(500)
    await Promise.all([ 
      this.doHtmlStep(5, 0), 
      this.doEffectHtmlsStep(5, 0),
    ])
    await delay(500)
    await this.doStyleStep(2)
    await delay(500)
    await Promise.all([ 
      this.doHtmlStep(6, 1), 
      this.doEffectHtmlsStep(6, 1),
    ])
    await delay(500)
    await this.doStyleStep(3)
    await delay(500)
    await Promise.all([ 
      this.doHtmlStep(7, 2), 
      this.doEffectHtmlsStep(7, 2),
    ])
    await delay(500)
    await this.doStyleStep(4)
    await delay(500)
    await Promise.all([ 
      this.doHtmlStep(8, 3), 
      this.doEffectHtmlsStep(8, 3),
    ])
    await delay(500)
    await this.doStyleStep(5)
    await delay(500)

    await Promise.all([ 
      this.doHtmlStep(9, 4), 
      this.doEffectHtmlsStep(9, 4),
    ])
    await delay(500)
    await this.doStyleStep(6)
    await delay(500)
    await Promise.all([ 
      this.doHtmlStep(10, 5), 
      this.doEffectHtmlsStep(10, 5),
    ])
    await delay(500)
    await this.doStyleStep(7)
    await delay(500)
  },
  methods: {
    doStyleStep (step) {
      const cssEditRef = this.$refs.cssEditRef

      return new Promise((resolve) => {
        const styleStepConfig = styles[ step ]

        if (!styleStepConfig) {
          return
        }

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

            document.documentElement.scrollTo({
              top: 10000,
              left: 0,
            })

            cssEditRef && cssEditRef.scrollTo({
              top: 100000,
              left: 0,
            })
          }
        }, 0)
      })
    },
    doEffectHtmlsStep (step, insertStepIndex = -1) {
      const insertStep = insertStepIndex !== -1 ? `<!-- htmlStep${insertStepIndex} -->` : -1
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
            this.previewHtmls = previewHtmls
            start += 1
          }
        }, 0)
      })
    },
    doHtmlStep (step, insertStepIndex = -1) {
      const htmlEditRef = this.$refs.htmlEditRef
      const htmlEditPreRef = this.$refs.htmlEditPreRef
      const insertStep = insertStepIndex !== -1 ? `<!-- htmlStep${insertStepIndex} -->` : -1
      return new Promise((resolve) => {
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

            if (insertStep !== -1) {
              htmlEditRef && htmlEditRef.scrollTo({
                top: (htmlEditPreRef.offsetHeight - htmlEditRef.offsetHeight) / 2,
                left: (htmlEditPreRef.offsetWidth - htmlEditRef.offsetWidth) / 2,
              })
            } else {
              htmlEditRef && htmlEditRef.scrollTo({
                top: 100000,
                left: 0,
              })
            }
          }
        }, 0)
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