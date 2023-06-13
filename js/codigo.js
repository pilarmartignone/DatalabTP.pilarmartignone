document.getElementById('menu').addEventListener('click', function () {

    document.getElementById('navega').classList.toggle('mostrar');
})


lightbox.option({
    'wrapAround': true,
    'albumLabel': "Galeria %1 de %2",
    'positionFromTop': 0,
    'imageFadeDuration': 600,
})


document.getElementById('boton').addEventListener('click', function () {

    if (document.getElementById('miVideo').paused)
        document.getElementById('miVideo').play();
    else
        document.getElementById('miVideo').pause();
})
