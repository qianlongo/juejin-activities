export default [
  // 开头寒暄
  `
  <!-- 
    大家好，我是前端胖头鱼！！！
    掘金最近活动太多了，奖品也丰厚
    我就很想要那个美腻的小姐姐 
  -->
  `,
  // 创建编辑器本身
  ` 
  <div class="container">
    <div class="edit">
      <div class="html-edit">
        <!-- 这是html代码编辑区域 -->
        <pre v-html="htmlEditPre">
          <!-- htmlStep0 -->
        </pre>
      </div>
      <div class="css-edit">
        <!-- 这是css代码编辑区域 -->
        <pre v-html="cssEditPre"></pre>
      </div>
    </div>
    <div class="preview">
      <!-- 这是预览区域，登录最终会被画到这里噢 -->
      <div class="preview-html"></div>
      <!-- 这里样式区域 -->
      <div v-html="cssEditPre"></div>
    </div>
  </div>
  `,
  `
          <!-- 灯笼容器 -->
          <div class="lantern-con">
            <!-- 提着灯笼的线 -->
            <div class="lantern-line"></div>
            <!-- 灯笼主要区域 -->
            <div class="lantern-light">
              <!-- 灯笼中间的线条 -->
              <div class="lantern-circle">
                <div class="lantern-rect">
                  <!-- 灯笼中间的文字内容 -->
                  <div class="lantern-text">灯笼</div>
                </div>
              </div>
              <div class="lantern-tassel-top">
                <div class="lantern-tassel-middle"></div>
                <div class="lantern-tassel-bottom"></div>
              </div>
            </div>
          </div>
  `
]