# ae-lottie-demo
通过AE和Lottie创建Web动画demo

## 技术总结
### 创建AE项目
根据《AE实战入门教学》这门课程，逐步创建好AE动画项目；并且安装AE bodymovin插件，导出json文件

### 在Web上显示AE动画
可以通过`npm`直接安装`lottie-web`这个库，由于我使用的是React，所以使用了`react-lottie`这个react封装库
```bash
npm install --save react-lottie
```
这个库导出了一个`Lottie`组件，并且可以通过`props`传递`lottie-web`支持的参数
```javascript
// ...
import Lottie from "react-lottie";
import animationData from "./data.json";
// ...

class App extends React.Component {
  defaultOptions = {
    autoplay: true,
    loop: true,
    animationData: animationData
  };

  eventListeners = [
    {
      eventName: "loopComplete",
      callback: () => console.log("a loop complete")
    }
  ];

  render() {
    return (
      <Lottie
        width={300}
        eventListeners={this.eventListeners}
        options={this.defaultOptions}
      />
    );
  }
}
```
漂亮复杂的Web动画就完成了，有点遗憾的是，`bodymovie`无法导出`3D粒子动画`之类的3D动画，但是实现2D动画还是很实用强大...  
PS: 作为一个前端真的不容易啊，连AE都不会，都不好意思说自己是前端==

## 扩展
### CodeSandbox集成Github
这个`demo`一开始是放在`CodeSandbox`里的，今天有空仔细研究了一下`CodeSandbox`，发现它可以集成`GitHub`, 于是学习了下，将这个`demo`同步到了`GitHub`...
#### 使用
`CodeSandbox`可以直接导入公有的`GitHub`, 来创建相应的`Project`；也可以将`CodeSandbox Project`上传到`GitHub`；由于我的`CodeSandbox`已经创建，所以是上传到`GitHub`...
1. 点击`sidebar`上的`GitHub`按钮，点击`sign in`授权
2. 输入`Repository Name`, 点击`Create Repository`, 就会创建相应的`GitHub Repo`, 此时 `sidebar panel`会变成下面这样，就可以输入相应的`Subject`和`Description`, `commit`或者`PR`到`GitHub`了
[![屏幕快照 2019-02-19 下午2.56.52.png](https://i.loli.net/2019/02/19/5c6ba8d63d508.png)](https://i.loli.net/2019/02/19/5c6ba8d63d508.png)





## 参考资料
* [AE實戰入門教學 https://www.youtube.com/watch?v=XxNB7oV6m-A](https://www.youtube.com/watch?v=XxNB7oV6m-A)
* https://www.npmjs.com/package/lottie-web
* https://www.npmjs.com/package/react-lottie
* https://codesandbox.io/docs/git

