import $ from "jquery";
import createReactUnit from './unit'
import createElement from './element'
let React = {
    render,
    createElement,
    nextRootIndex: 0
}
// 给每个元素 添加一个属性 为了方便获取到这个元素
function render(element, container) {
    // 写一个工厂函数 来创建对应的react元素
    let createReactUnitInstance = createReactUnit(element);
    // let markup = `<span data-reactid="${React.nextRootIndex}">${element}</sapn>`
    let markup = createReactUnitInstance.getMarkUp(React.nextRootIndex);  
    $(container).html(markup)
}

export default React