var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '(_　_)。゜zｚＺ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '\(￣︶￣*\))' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 1500);
    }
 });
