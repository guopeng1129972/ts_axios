// 混合类型
// 定义接口的时候，可以同时设置几种不同的值
interface Counter {
  (star: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = function (star: number) {} as Counter
  counter.interval = 10
  counter.reset = function () {}
  return counter
}

let c = getCounter()
c(10)
c.interval = 15
c.reset()
