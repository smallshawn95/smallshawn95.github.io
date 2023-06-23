function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '標題：' + document.title + '\n連結：' + url } });
    btf.snackbarShow("成功複製此頁標題和連結")
}