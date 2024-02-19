// 实现模糊查询 ==========
let keyword = document.querySelector('.keyword');//获取输入框
let searchHelper = document.querySelector('.search-helper');//获取搜索的下拉列表


// 定义数组，存储搜索的内容
let searchArr = ['小米手机','华为手机','苹果手机','小米电视','小米平板','苹果12','苹果13','苹果手表'];

// 给输入框绑定内容改变事件
keyword.oninput = function(){
    searchHelper.innerHTML = '';
    for(let i = 0; i < searchArr.length; i++){
        if(searchArr[i].indexOf(keyword.value) != -1){
            searchHelper.innerHTML += '<p>'+searchArr[i]+'</p>';
            searchHelper.style.display ='block';
        }
    }   
}

keyword.onblur =  function(){
    searchHelper.style.display = 'none';
}
// 实现轮播图的切换=======================
let img = document.querySelector('.img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let lis = document.querySelectorAll('.banner-btn li')

let imgArr = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg']

let count = 0

// 定义函数，用来切换图片的路径
function cutimg(){
    img.src = './images/' + imgArr[count];

    for(let i = 0; i < lis.length; i++){
        lis[i].className = '';
    }
    lis[count].className = 'active'
}

// 设置定时器，每隔3秒切换图片
let timer = setInterval (function(){
    count++;
if(count > imgArr.length - 1){
    count = 0;
}
    cutimg();
}, 2000);

// 点击下一张
next.onclick = function(){
    count++
    if(count > imgArr.length - 1){
        count = 0
    }
    cutimg();
}

// 点击上一张
prev.onclick = function(){
    count--;
    if(count < 0){
        count = imgArr.length - 1;
    }
    cutimg();
}

// 鼠标滑入div，停止切换
slide.onmouseover = function(){
    clearInterval(timer);
}

// 鼠标滑出div，切换
slide.onmouseout = function(){
    timer = setInterval (function(){
        count++;
    if(count > imgArr.length - 1){
        count = 0;
    }
        cutimg();
    }, 2000);
}

// 给li绑定点击事件
for(let i = 0; i < lis.length;i++){
    lis[i].onclick = () => {

        count = i;
        cutimg();
    };
}