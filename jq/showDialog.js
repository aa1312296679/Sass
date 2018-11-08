(function($) {
    var settings = {
        title : "警告",
        content : "系统运行错误！",
    };

    $.fn.myPlugin = function(options) {

        settings = options!=undefined?options:settings;

        $(this).find(".dialog-title").html(settings.title);
        $(this).find(".dialog-content p").html(settings.content);

    }
})(jQuery);
