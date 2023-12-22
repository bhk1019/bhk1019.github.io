function resize_rule(){
    var $rule = $("#rule");
    if ($(window).width() > 768) {
        $height = $("#content").height() + 260;
        $rule.css("width", "0");
        $rule.css("height", $height +"px");
    }
    if ($(window).width() < 768) {
        $rule.css("width", "300px");
        $rule.css("height", "0");
    }
}

$(document).ready(function(){
    resize_rule();
    $(window).on("resize", resize_rule);
});
