
//fazer o menu descer.
//apesar de parecer longo, a ideia é fazer o uso completo da ideia de poder mexer com o CSS com o js.
window.onload = function(e) {
    var offset = document.getElementsByClassName('menu-nav')[0].offsetTop;
    var menu = document.getElementsByClassName('menu-nav')[0];
    var ulmenu = document.getElementsByClassName('ulmenu')[0];


    document.addEventListener('scroll', function() {
        if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
            menu.style.position = 'fixed';
            menu.style.top = '0';
            menu.style.paddingTop = '0';
            menu.style.paddingBottom = '1em';
            menu.style.width = '100%';
            menu.style.opacity = '1';
            ulmenu.style.borderBottom = '0.2em solid rgb(35, 35, 35, 0.7)';
            ulmenu.style.padding = '1em 1em 0 1em';
            ulmenu.style.background = '#BBBBBB';
            ulmenu.style.display = 'block';
            ulmenu.style.height = '100%';
            console.log(document.body.scrollTop);
            console.log(document.documentElement.scrollTop);
            console.log(offset);

        } else {
            menu.style.position = 'sticky';
            menu.style.top = '0';
            menu.style.paddingTop = '1em';
            menu.style.paddingBottom = '1em';
            ulmenu.style.borderBottom = 'initial';
            ulmenu.style.background = 'initial';
            ulmenu.style.padding = '1em';
            ulmenu.style.background = 'initial';
            ulmenu.style.display = 'initial';
            ulmenu.style.height = 'initial';
            console.log(document.body.scrollTop);
            console.log(document.documentElement.scrollTop);
            console.log(offset);
        }
    });
}


//if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset)
