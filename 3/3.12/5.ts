// 接口继承类
class Control{
  private state:any
}
// 继承Control 并拓展 select()方法
interface SelectableControl extends Control {
  select()
}
// 实例Butten 继承Control 实现SelectableControl 提供 shselect()方法
class Butten extends Control implements SelectableControl{
  select(){}
}
// 实例TextBox 继承Control 实现select方法
class TextBox extends Control{
  select(){}
}

// 实例TextBox 实现SelectableControl 提供 shselect()方法 不行 接口继承类的时候会继承私有成员
// 类“ImageC”错误实现接口“SelectableControl”。类型 "ImageC" 中缺少属性 "state"，但类型 "SelectableControl" 中需要该属性。
class ImageC implements SelectableControl{
  select() {
    
  }
}