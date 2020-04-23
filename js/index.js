var items = document.getElementsByClassName("item");
var goProBtn = document.getElementById("goPro");
var goNextBtn = document.getElementById("goNext");
var point = document.getElementsByClassName("pointitem");
var index = 0;

var cleanAction = function(){
    for(var i = 0; i<items.length;i++){
        point[i].className = "pointitem";
        items[i].className = "item";
    }
}

var goIndex = function(){
    cleanAction();
    point[index].className = "pointitem active";
    items[index].className = "item active";
}
var goNext = function(){
    if(index < 4){
        index++;
    }else{
        index = 0;
    }
    goIndex();
}
var goPro = function(){
    if(index == 0){
        index = 4;
    }else{
        index --;
    }
    goIndex();
}
goNextBtn.addEventListener('click',function(){
    goNext();
})
goProBtn.addEventListener('click',function(){
    goPro();
})
for(var i = 0 ;i<point.length; i++){
    point[i].addEventListener('click',function(){
        var points = this.getAttribute("data-index");
        index = points;
        goIndex();
    })
}

var search = document.getElementById("search");
var searchBtn = document.getElementById("searchbtn");
var searchHot = document.getElementById("searchhot");

search.onblur = function(){
    searchBtn.style.border="1px solid #e0e0e0";
    searchHot.style.display="block";
}
search.addEventListener('click',function(){
    searchBtn.style.border="1px solid #ff6700";
    searchBtn.style.borderLeft="none";
    searchHot.style.display="none";
})

var itemcil = document.getElementById("item-chil");




//主菜单及其子项
var menu = document.getElementById("nav-list");
var menuItems = menu.getElementsByClassName("nav-z");
//子菜单及其子项
var subMenu = document.getElementById("item-chil");
var subMenuItems = subMenu.getElementsByClassName("item-children-list");

function setMenu() {
    //遍历主菜单，绑定事件
    for (var i = 0; i<menuItems.length; i++)
    {
        //为每一个菜单项添加一个自定义的索引属性,因为for循环内的function用i全是最大值,无法具体索引到某一个节点
        menuItems[i].setAttribute("data-index",i);
        //鼠标滑过触发事件
        menuItems[i].onmouseover = function () {
            //显示子菜单
            console.log("1");
            subMenu.style.display = 'block';
            //显示子菜单项
            for (var j = 0; j < subMenuItems.length; j++){
                subMenuItems[j].style.display = 'none';
                
                menuItems[j].style.background = 'none';
            }
            var idx = this.getAttribute("data-index");
            subMenuItems[idx].style.display = 'block';
        };

        //鼠标离开整个主菜单触发事件
        menu.onmouseout = function () {
            //隐藏子菜单
            subMenu.style.display = 'none';
        };
        //保证鼠标移动到子菜单上，离开主菜单时，子菜单不会消失
        subMenu.onmouseover = function () {
            this.style.display = 'block';
        };
        //鼠标离开子菜单时，子菜单消失
        subMenu.onmouseout = function () {
            this.style.display = 'none';
        };
    }
}
setMenu();