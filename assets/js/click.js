const click = {
    init: function () {
        this.clickShowmenu('.toggle__click', '.Toggle__Slide', 'showMenu');
        this.clickShowmenu('.toggle__click', '.toggle__click-button .fa-plus', 'hidePlus');
        this.clickShowmenu('.toggle__click', '.toggle__click-button .fa-minus', 'showMinus');
        this.clickShowmenu('.icon__demons', '.icon__demons .demons__first .fa-id-card-alt', 'hideCard');
        this.clickShowmenu('.icon__demons', '.icon__demons .demons__second .fa-id-card-alt', 'hideCard');
        this.clickShowmenu('.icon__demons', '.icon__demons .demons__first .fa-plus', 'showCard');
        this.clickShowmenu('.icon__demons', '.icon__demons .demons__second .fa-plus', 'showCard');
        this.clickShowmenu('.icon__demons', '#wrapper .wrapper__ovl', 'ovl');
        this.clickShowmenu('#wrapper .wrapper__ovl', '#wrapper .wrapper__ovl', 'ovl');
        this.clickShowmenu('#wrapper .wrapper__ovl', '.icon__demons .demons__first .fa-plus', 'showCard');
        this.clickShowmenu('#wrapper .wrapper__ovl', '.icon__demons .demons__second .fa-plus', 'showCard');
        this.clickShowmenu('#wrapper .wrapper__ovl', '.icon__demons .demons__first .fa-id-card-alt', 'hideCard');
        this.clickShowmenu('#wrapper .wrapper__ovl', '.icon__demons .demons__second  .fa-id-card-alt', 'hideCard');
        this.clickShowmenu('.Humberger', '.Head .Head__content .Head__menu', 'showUL');
        this.clickShowmenu('#mega__1 .Head__menu-link', '#mega__1 .fa-angle-down', 'showrotate');
        this.clickShowmenu('#mega__2 .Head__menu-link', '#mega__2 .fa-angle-down', 'showrotate');
        this.clickShowmenu('#mega__1 .Head__menu-link', '#mega__1 .Mega__menu', 'showMega');
        this.clickShowmenu('#mega__2 .Head__menu-link', '#mega__2 .Mega__menu', 'showMega');
    },
    clickShowmenu: function (button, menu, togeMenu) {
        let btn = document.querySelector(button);
        let navMenu = document.querySelector(menu);
        btn.addEventListener('click', () => {
            navMenu.classList.toggle(togeMenu);
        });
    },
}
click.init();

const percent = {
    init: function() {
        this.scrollCount('.Our', '#Our1 .Our__item', 'Our__effect');
        this.scrollCount('.Our', '#Our2 .Our__item', 'Our__effect');
        this.scrollCount('.Our', '#Our3 .Our__item', 'Our__effect');
    },
    scrollCount: function(classDivHeight, classNeedAdd, classAdd) {
        let heightToWrapper = document.querySelector(classDivHeight).offsetTop;
        console.log(heightToWrapper);
        let countPercent = document.querySelector(classNeedAdd);
        window.addEventListener('scroll', () => {
            let scrollWindowHeight = window.pageYOffset;
            console.log(scrollWindowHeight);
            if (scrollWindowHeight >= (heightToWrapper) - 84) {
                countPercent.classList.add(classAdd);
            }
        })
    }
}
percent.init();

const OurBT = {
    init: function() {
        this.scrollCount('.Our__bottom','.Our__bottom-content', 'Our__effect');
        this.scrollCount('.SoftWare','#sw_1 .SoftWare__img', 'sw__effect');
        this.scrollCount('.SoftWare','#sw_2 .SoftWare__img', 'sw__effect');
    },
    scrollCount: function(classDivHeight, classNeedAdd, classAdd) {
        let heightToWrapper = document.querySelector(classDivHeight).offsetTop;
        console.log(heightToWrapper);
        let countPercent = document.querySelector(classNeedAdd);
        window.addEventListener('scroll', () => {
            let scrollWindowHeight = window.pageYOffset;
            console.log(scrollWindowHeight);
            if (scrollWindowHeight >= (heightToWrapper) - 350) {
                countPercent.classList.add(classAdd);
            }
        })
    }
}
OurBT.init();

const Theme = {
    init: function() {
        this.scrollCount('.Theme','#Theme__1 .Theme__img', 'Theme__effect');
        this.scrollCount('.Theme','#Theme__2 .Theme__item-content', 'Theme__effect');
        this.scrollCount('.Theme','#Theme__3 .Theme__img', 'Theme__effect');
        this.scrollCount('.Theme','#Theme__4 .Theme__item-content', 'Theme__effect');
        this.scrollCount('.Theme','#Theme__5 .Theme__img', 'Theme__effect');
        this.scrollCount('.Theme','#Theme__6 .Theme__item-content', 'Theme__effect');
    },
    scrollCount: function(classDivHeight, classNeedAdd, classAdd) {
        let heightToWrapper = document.querySelector(classDivHeight).offsetTop;
        console.log(heightToWrapper);
        let countPercent = document.querySelector(classNeedAdd);
        window.addEventListener('scroll', () => {
            let scrollWindowHeight = window.pageYOffset;
            console.log(scrollWindowHeight);
            if (scrollWindowHeight >= (heightToWrapper) - 100) {
                countPercent.classList.add(classAdd);
            }
        })
    }
}
Theme.init();

const Business = {
    init: function() {
        this.scrollCount('.Bussiness','.Bussiness .Bussiness__bg .Bussiness__img', 'Bussiness__effect');
        this.scrollCount('.Read','.Read .Read__bg', 'Read__effect');
    },
    scrollCount: function(classDivHeight, classNeedAdd, classAdd) {
        let heightToWrapper = document.querySelector(classDivHeight).offsetTop;
        console.log(heightToWrapper);
        let countPercent = document.querySelector(classNeedAdd);
        window.addEventListener('scroll', () => {
            let scrollWindowHeight = window.pageYOffset;
            console.log(scrollWindowHeight);
            if (scrollWindowHeight >= (heightToWrapper) - 320) {
                countPercent.classList.add(classAdd);
            }
        })
    }
}
Business.init();

