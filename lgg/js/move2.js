
function move2(ele, attr, target,speed,callback) {
	var timer = null;
    // 如果传入的是类名,把他转换为dom对象
    if(typeof ele == 'string') {
        ele = document.querySelector(ele);
    }
    clearInterval(ele.timer);
    // 获取初始样式属性值
    var init = parseFloat(getStyle(ele, attr));
    // 如果是修改透明度, 转化成一百进行计算
    // target默认传进来的就已经转换了

    // 如果属性名称是opacity，乘100
    if(attr == 'opacity') {
        init *= 100;
    }
    var speed =speed||0.4;
    // 如果目标值小于初始值,速度为负值
    if(target < init) {
        speed *= -1;
    }
    // 给每一个dom对象添加专有定时器
    ele.timer = setInterval(function () {
        init += speed;
        // 添加终止运动的条件
        // 从小变大,speed为正,init > target 终止
        // 从大到小, speed为负, init < target 终止
        var bool = (speed > 0 && init >= target) || (speed < 0 && init <=  target)
        if (bool) {
            // 终止条件
            init = target;
            clearInterval(ele.timer);
            // 设置一个回调函数,当运动结束后调用
            if(typeof callback == 'function') {
                callback(ele);
            }
        }
        if(attr == 'opacity') {
            // 透明度放大了100, 最后要在缩小100
            ele.style[attr] = init / 100;
        } else {
            ele.style[attr] = init + 'px';
        }
        if(bool) {
            
        }
    }, 10);
}
// 获取非行内样式
function getStyle(ele, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(ele, null)[attr];
    }
    return ele.currentStyle[attr];
}