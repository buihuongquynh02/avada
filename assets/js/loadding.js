const Loading = {
    init: function () {
        this.Load();
    },
    Load: function () {
        let Lo = document.querySelector('.Loadding');
        window.addEventListener('load', function () {
            setTimeout(() => {
                Lo.classList.add('LoadOff');
            },1000);
        });
    }
}
Loading.init();