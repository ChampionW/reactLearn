

class Unit {
    constructor(element){
        this.currentElement = element;
    }
}
class ReactTextUnit extends Unit {
    getMarkUp(rootId) {
        this._rootId = rootId;
        // 返回当前元素对应的html脚本
        let markup = `<span data-reactid="${rootId}">${this.currentElement}</sapn>`
        return markup;
    }
}

function createReactUnit(element) {
    if(typeof element === 'string'|| typeof element === 'number'){
        return new ReactTextUnit(element)
    }
}
export default createReactUnit;