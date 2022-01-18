export default [
  // 1. 添加基本样式
  `
  /* 首先给所有元素加上过渡效果 */
  * {
    transition: all .3s;
    -webkit-transition: all .3s;
  }
  /* 白色背景太单调了，我们来点背景 */
  html {
    color: rgb(222,222,222); 
    background: rgb(0,43,54); 
  }
  /* 代码高亮 */
  .token.selector{ 
    color: rgb(133,153,0); 
  }
  .token.property{ 
    color: rgb(187,137,0); 
  }
  .token.punctuation{ 
    color: yellow; 
  }
  .token.function{ 
    color: rgb(42,161,152); 
  }
  `,
  // 创建编辑器本身的样式
  `
  /* 我们需要做一个铺满全屏的容器 */
    .container{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 代码编辑区域30%宽度吧，多留一些空间给预览区域 */
    .edit{
      width: 50%;
      height: 100%;
      background-color: #1d1f20;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .html-edit, .css-edit{
      flex: 1;
      overflow: scroll;
      padding: 10px;
    }

    .html-edit{
      border-bottom: 5px solid #2b2e2f;
    }
    /* 预览区域有50%的空间 */
    .preview{
      flex: 1;
      height: 100%;
      background-color: #2f1f47;
    }

    .preview-html{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
  `,
  `
  /* 灯笼容器 */
  .lantern-con {
    position: relative;
  }

  /* 灯笼中间红色区域 */
  .lantern-light {
    position: relative;
    width: 120px;
    height: 90px;
    background-color: red;
    margin: 30px;
    border-radius: 50%;
    box-shadow: -5px 5px 50px 4px #fa6c00;
    /* 设置旋转点 */
    transform-origin: top center;
    animation: swing 3s infinite ease-in-out;
  }

  /* 灯笼顶部和底部的样式 */
  .lantern-light::before,
  .lantern-light::after {
    content: "";
    position: absolute;
    border: 1px solid #dc8f03;
    width: 60px;
    height: 12px;
    /* 背景渐变 */
    background: linear-gradient(
      to right,
      #dc8f03,
      #ffa500,
      #dc8f03,
      #ffa500,
      #dc8f03
    );
    left: 30px;
  }

  /* 顶部位置 */
  .lantern-light::before {
    top: -7px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  /* 底部位置 */
  .lantern-light::after {
    bottom: -7px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  /* 提着灯笼的线的样式 */
  .lantern-line {
    width: 2px;
    height: 50px;
    background-color: #dc8f03;
    position: absolute;
    left: 88px;
  }
  /* 灯笼的动画效果 */
  @keyframes swing {
    0% {
      transform: rotate(-6deg);
    }

    50% {
      transform: rotate(6deg);
    }

    100% {
      transform: rotate(-6deg);
    }
  }
  /* 灯笼中间的线条 */
  .lantern-circle,
  .lantern-rect {
    height: 90px;
    border-radius: 50%;
    border: 2px solid #dc8f03;
    background-color: rgba(216, 0, 15, 0.1);
  }

  /* 外层 */
  .lantern-circle {
    width: 100px;
    margin: 12px 8px 8px 10px;
  }

  /* 内层 */
  .lantern-rect {
    margin: -2px 8px 8px 26px;
    width: 45px;
  }

  /* 文字样式 */
  .lantern-text {
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    color: #dc8f03;
    margin-top: 4px;
  }
  /* 灯穗 */
  .lantern-tassel-top {
    width: 5px;
    height: 20px;
    background-color: #ffa500;
    border-radius: 0 0 5px 5px;
    position: relative;
    margin: -5px 0 0 59px;
    /* 让灯穗也有一个动画效果 */
    animation: swing 3s infinite ease-in-out;
  }

  .lantern-tassel-middle,
  .lantern-tassel-bottom {
    position: absolute;
    width: 10px;
    left: -2px;
  }

  .lantern-tassel-middle {
    border-radius: 50%;
    top: 14px;
    height: 10px;
    background-color: #dc8f03;
    z-index: 2;
  }

  .lantern-tassel-bottom {
    background-color: #ffa500;
    border-bottom-left-radius: 5px;
    height: 35px;
    top: 18px;
    z-index: 1;
  }
  `
]