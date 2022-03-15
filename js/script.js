
//fazer o menu descer.
window.onload = function(e) {
    var offset = document.getElementsByClassName('menu-nav')[0].offsetTop;
    var menu = document.getElementsByClassName('menu-nav')[0];
    var ulmenu = document.getElementsByClassName('ulmenu')[0];

    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
            menu.style.top = '0';
            menu.style.paddingTop = '0';
            menu.style.width = '100%'
            ulmenu.style.padding = '1em 1em 0 1em';
            ulmenu.style.background = '#BBBBBB';
            ulmenu.style.display = 'block';
            ulmenu.style.height = '100%';

        } else {
            menu.style.position = 'initial';
            menu.style.paddingTop = '1em';
            menu.style.paddingBottom = '0.5em';
            ulmenu.style.background = 'initial';
            ulmenu.style.padding = '1em';
            ulmenu.style.background = 'initial';
            ulmenu.style.display = 'initial';
            ulmenu.style.height = 'initial';
        }
    });
}

