//非法字符判断
function verfiTime(years) {
    if (isNaN(years)) {
        alert('Please input a number!');
        return false;
    }
    if (years <= 0) {
        alert('Please input a right year!');
        return false;
    }
    return true;
}

//创建一头牛
function Cow(age) {
    var age = age;
    this.getAge = function () {
        return age;
    };
    this.setAge = function (age) {
        age = age;
    };
    this.grow = function () {
        age++;
    };
    //该牛生育后代
    this.generration = function () {
        if (age >= 5) {
            return new Cow(1);
        }
        return null;
    }
}

//输出每年牛的数量
function getCowNum(years) {
    var c = new Cow(0);
    var farm = new Array();
    farm.push(c);
    var temp = new Array();
    var count = new Array();
    for (var i = 0; i < years; i++) {
        farm.map(function (c) {
            c.grow();
            var child = c.generration();
            if (child != null) {
                temp.push(child);
            }
        });
        farm = farm.concat(temp);
        temp = [];
        count.push(farm.length);
    }
    return count;
}

//渲染每年牛的数量变化
var app = new Vue({
    el:'#control',
    data:{
        message:'',
        items: []
    },
    methods:{
        run: function(){
            var years = this.message;
            var flag = verfiTime(years);
            if(flag){
                var cowNum = getCowNum(years);
                var cowsOut = new Array();
                for(num in cowNum){
                    var obj = new Object();
                    var y = Number.parseInt(num) + 1;
                    obj.text = '第' + y + '年' + '共有' + cowNum[num] + '头牛';
                    cowsOut.push(obj);
                }
                this.items = cowsOut;
            }
        }
    }
});