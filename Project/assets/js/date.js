
$(function () {
    setTimeout("displaytime()", 1000);
})
function displaytime() {
    var dt = new Date();
    y = dt.getFullYear();
    m = dt.getMonth() + 1;
    d = dt.getDate();
    var str = " | "+m + "/" + d + "/" + y;
    $("#date").html(dt.toLocaleTimeString() + str);
    setTimeout("displaytime()", 1000);
}
