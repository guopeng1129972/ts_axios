// ### 实例接口类型 静态的
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}
class Clock implements ClockInterface {
  currentTime: Date
  constructor(h: number, m: number) {}
  setTime(d: Date) {
    this.currentTime = d
  }
}
