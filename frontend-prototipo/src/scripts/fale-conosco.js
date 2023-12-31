document.addEventListener("DOMContentLoaded", function () {
   
    var perfilLink = document.getElementById('perfil-link');

    
    perfilLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/meu-perfil.html";
    });

    var admLink = document.getElementById('adm-link');

    
    admLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/painelAdministrador.html";
    });

    var sairLink = document.getElementById('sair-link');

    
    sairLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/telaLogin.html";
    });

    var voltarLink = document.getElementById('voltar');

    
    voltarLink.addEventListener('click', function (event) {
        event.preventDefault();

        window.location.href = "/frontend-prototipo/src/pages/index-menu.html";
    });
    
});
