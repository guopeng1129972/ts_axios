let x = [0, 1, null]
class Animal {
  numLegs: number
}

class Bee extends Animal {}

class Lion extends Animal {}
//1. 形如这样 ts的类型推断 会进行推断为Bee Lion的联合类型
let zoo = [new Bee(), new Lion()]

// 2. 上下文类型
window.onmousedown = function (mouseEvent: any) {
  // 指定传入类型为any不然会类型检查报错
  console.log(mouseEvent.onclick)
}
// 3.利用上下文类型推断推断类型的一个简单使用 优先使用Animal[]类型
function createZoo(): Animal[] {
  return [new Bee(), new Lion()]
}
