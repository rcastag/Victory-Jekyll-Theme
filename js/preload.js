window.addEventListener(
    'load',
    function load()
    {
        window.removeEventListener('load', load, false);
        document.body.classList.remove('preload');
        // document.getElementById("body").style.display = "block";
    },
    false);