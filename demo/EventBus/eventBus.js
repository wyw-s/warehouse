/**
 * 实现eventBus事件总线
 */
class EventBus {
  constructor() {
    // 事件列表
    this.eventArr = []
  }
  // 订阅一个事件；
  $on(eventName, fn) {
    // 判断事件列表中是否有同名的事件；
    for (let i = 0; i < this.eventArr.length; i++) {
      // 若存在则给出警告
      if (this.eventArr[i][eventName]) {
        console.error('错误，你已经注册过了一个同名事件')
        // this.eventArr.splice(i, 1) 可以在这里先删除同名事件
        return
      }
    }
    const eventObj = {}
    eventObj[eventName] = fn
    this.eventArr.push(eventObj)
  }
  // 发布一个事件
  $emit(eventName, params) {
    // 从事件列表中找到事件同名的事件并添加处理函数
    for (let i = 0; i < this.eventArr.length; i++) {
      const key = Object.keys(this.eventArr[i])
      // 若存在则给出警告 反之 添加
      if ( key[0] === eventName) {
        this.eventArr[i][key](params)
      } else {
        console.error('错误，请检查你的事件名是否正确')
      }
    }
  }
}

module.exports = new EventBus()



