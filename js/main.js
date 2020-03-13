/* ----

# Binkic SST 0.8
# By: Dreamer-Paul
# Last Update: 2017.7.2

缤奇二级页面通用模板，实验室版本。

欢迎你加入缤奇，和我们一起改变世界。
本代码为缤奇保罗原创，并遵守 GPL3 开源协议。保罗的个人博客：https://hi-paul.space

---- */

// 菜单
var toggle_btn = $(".toggle-btn").get(0);
var toggle_menu = $(".head-menu").get(0);

toggle_btn.addEventListener("click", function () {
    var status = toggle_menu.classList.contains("active");
    toggle_menu.classList.toggle("active");

    if(status == true){
        toggle_menu.classList.add("remove");
        setTimeout(function () {
            toggle_menu.classList.remove("remove");
        }, 300);
    }
});

// 搜索菜单
var search_btn = $(".search-btn").get(0);
var search_menu = $(".head-search").get(0);

search_btn.addEventListener("click", function () {
    var status = search_menu.classList.contains("active");
    search_menu.classList.toggle("active");

    if(status == true){
        search_menu.classList.add("remove");
        setTimeout(function () {
            search_menu.classList.remove("remove");
        }, 300);
    }
});