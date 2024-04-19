const btnMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.inativos');

btnMostrarProjetos.addEventListener('click', function () {
    projetosInativos.forEach(function (projeto) {
        projeto.classList.remove('inativos');
    });
    btnMostrarProjetos.classList.add('remover');
});