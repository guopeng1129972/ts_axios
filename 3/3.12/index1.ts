// ### 构造器接口类型
interface ClockInterface {
  tick()
}
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface
}
// 返回ClockInterface的方法createClock
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  // ctor为名字
  return new ctor(hour, minute)
}
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log('tick toc')
  }
}
let digital=createClock(DigitalClock,hour:12,minute:17)
let analog=createClock(AnalogClock,hour:7,minute:32)