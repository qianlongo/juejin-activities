export default [
  // 0. 添加基本样式
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
  // 1.创建编辑器本身的样式
  `
  /* 我们需要做一个铺满全屏的容器 */
    .container{
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    /* 代码编辑区域50%宽度，留一些空间给预览区域 */
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

    /* 好啦~ 你应该看到一个编辑器的基本感觉了，我们要开始画灯笼咯 */
  `,
  // 2
  `
  /* 给灯笼的大肚子整样式 */
  .lantern-container {
    position: relative;
  }

  .lantern-light {
    position: relative;
    width: 120px;
    height: 90px;
    background-color: #ff0844;
    border-radius: 50%;
    box-shadow: -5px 5px 100px 4px #fa6c00;
    animation: wobble 2.5s infinite ease-in-out;
    transform-style: preserve-3d;
  }
  /* 让他动起来吧 */
  @keyframes wobble {
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
  `,
  // 3
  `
  /* 顶部的灯笼线 */
  .lantern-top-line {
    width: 4px;
    height: 50px;
    background-color: #d1bb73;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -20px;
    border-radius: 2px 2px 0 0;
  }
  `,
  // 4
  `
  /* 灯笼顶部、底部盖子样式 */
  .lantern-hat-top,
  .lantern-hat-bottom {
    content: "";
    position: absolute;
    width: 60px;
    height: 12px;
    background-color: #ffa500;
    left: 50%;
    transform: translateX(-50%);
  }
  /* 顶部位置 */
  .lantern-hat-top {
    top: -8px;
    border-radius: 6px 6px 0 0;
  }
  /* 底部位置 */
  .lantern-hat-bottom {
    bottom: -8px;
    border-radius: 0 0 6px 6px;
  }
  `,
  // 5
  `
  /* 灯笼中间的线条 */
  .lantern-line-out,
  .lantern-line-innner {
    height: 90px;
    border-radius: 50%;
    border: 2px solid #ffa500;
    background-color: rgba(216, 0, 15, 0.1);
  }
  /* 线条外层 */
  .lantern-line-out {
    width: 100px;
    margin: 12px 8px 8px 10px;
  }
  /* 线条内层 */
  .lantern-line-innner {
    margin: -2px 8px 8px 26px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `,
  // 6
  `
  /* 灯笼底部线条 */
  .lantern-rope-top {
    width: 6px;
    height: 18px;
    background-color: #ffa500;
    border-radius: 0 0 5px 5px;
    position: relative;
    margin: -5px 0 0 60px;
    /* 让灯穗也有一个动画效果 */
    animation: wobble 2.5s infinite ease-in-out;
  }

  .lantern-rope-middle,
  .lantern-rope-bottom {
    position: absolute;
    width: 10px;
    left: -2px;
  }

  .lantern-rope-middle {
    border-radius: 50%;
    top: 14px;
    height: 10px;
    background-color: #dc8f03;
    z-index: 2;
  }

  .lantern-rope-bottom {
    background-color: #ffa500;
    border-bottom-left-radius: 5px;
    height: 35px;
    top: 18px;
    z-index: 1;
  }
  `,
  // 7
  `
  /* 福样式 */
  .lantern-fu {
    font-size: 30px;
    font-weight: bold;
    color: #ffa500;
  }
  `
]