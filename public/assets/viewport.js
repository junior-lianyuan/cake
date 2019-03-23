/**
 * 设计稿宽度，倍率
 */
(function (width, multiple) {
    let fix = 1, setRem = function () {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / width * multiple * fix + 'px';
    };
    setRem();
    window.addEventListener("resize", setRem, false);
    window.addEventListener("orientationchange", setRem, false);
    window.addEventListener('load', function () {
        document.body.style.width = width / multiple + 'rem';
        fix = document.documentElement.clientWidth / document.body.offsetWidth;
        fix === 1 || setRem();
    });
})(375, 100);

