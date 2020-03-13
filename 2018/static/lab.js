var body = document.body;

// 菜单按钮
function head_menu() {
    var btn = document.getElementsByClassName("toggle-btn")[0];
    var menu = document.getElementsByClassName("head-menu")[0];
    btn.addEventListener("click", function () {
        menu.classList.toggle("active");
    })
}

// 搜索按钮
function search_btn() {
    var btn = document.getElementsByClassName("search-btn")[0];
    var form = document.getElementsByClassName("search-form")[0];
    btn.addEventListener("click", function () {
        form.classList.toggle("active");
    })
}

// 滚动切换样式
function nav_trans() {
    var header = document.getElementsByTagName("header")[0];
    var slider = document.getElementsByClassName("slider")[0];
    var page_head = document.getElementsByClassName("page-head")[0];

    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    if(slider || page_head){
        if(scroll >= 50)
        {
            header.classList.add("active");
        }
        else
        {
            header.classList.remove("active");
        }
    }
    else{
        header.classList.add("active");
    }
}

// 加载等待
window.addEventListener("DOMContentLoaded", function () {
    head_menu();
    search_btn();

    window.addEventListener("scroll", function () {
        nav_trans();
    });
});