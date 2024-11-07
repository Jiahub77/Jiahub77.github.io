// 封装函数
// element: dom 对象/ 标签
// option: css 对象 {width: "200px",height: "150px", opacity: .5}
// callback: 回调函数（可选）
function animate(element, option, callback) {
    // 使用定时器之前，先清除定时器
    element.timer && clearInterval(element.timer);
    // 执行定时器函数
    element.timer = setInterval(function () {
        // 定义开关
        var isStop = true;
        // 循环option对象
        for (var property in option) {
            // 获取属性值(目标属性值)
            var value = option[property];
            // 判断属性是否为透明度属性 是就乘以100
            value = property === 'opacity' ? (option[property] * 100) : parseFloat(value);
            // 获取标签属性值（当前属性值）
            var cssObj = getComputedStyle(element);
            var current = cssObj[property];
            current = property === 'opacity' ? (cssObj[property] * 100) : parseFloat(current);
            // 检测透明度属性
            // 透明度单独处理
            // property === 'opacity' && console.log(property);
            // 步长
            // 步长 = (目标位置 - 当前位置) / 数字
            var speed = (value - current) / 10;
            // 结果：
            // 0.111    大于0    向上取整  1
            //  -0.2222  小于0   向下取整  -1
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            // 判断所有属性是否运动到目标值
            if (current != value) {
                // 如果存在一个属性没有达到目标位置 那就不让停止定时器
                isStop = false;
            }
            // 设置标签的目标属性值
            //  透明度是0 ~ 1 之间 
            var propValue = property === 'opacity' ? (current + speed) / 100 : current + speed + "px";
            element.style[property] = propValue;

        }
        // 循环结束，如果布尔值为true，就说明所有属性都达到目标位置
        if (isStop) {
            // 停止指定定时器函数
            clearInterval(element.timer);
            // 检测是否有回调函数
            if (callback && typeof callback == 'function') {
                callback();
            }
        }
    }, 10)
}
