// this 在回调参数里面
interface UIElement {
  addClickListener(onClick: (this: void, e: Event) => void): void
}

class Hander {
  type: string

  // onClickBad(this: Hander, e: Event) {
    // 使用箭头函数避免使用this拿不到
  onClickBad = (e: Event) => {
    this.type = e.type
  }
}

let h = new Hander()

let uielement: UIElement = {
  addClickListener() {},
}

uielement.addClickListener(h.onClickBad)
