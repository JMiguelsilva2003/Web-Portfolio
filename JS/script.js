const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

const serviceBoxes = document.querySelectorAll('.services-box');
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

serviceBoxes.forEach(box => {
    const readMoreBtn = box.querySelector('.btn');
    const paragraph = box.querySelector('p');
    
    readMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Expandir o texto para 50 linhas e mostrar o overlay
        paragraph.style['-webkit-line-clamp'] = '50';
        box.classList.add('active');
        overlay.classList.add('active');

        // Criar botão de fechar dinamicamente
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-btn');
        closeButton.innerHTML = '&times;';
        box.appendChild(closeButton);

        // Fechar ao clicar no botão de fechar
        closeButton.addEventListener('click', function() {
            paragraph.style['-webkit-line-clamp'] = '4'; // Retornar para 4 linhas
            box.classList.remove('active');
            overlay.classList.remove('active');
            closeButton.remove(); // Remover botão de fechar
        });

        // Fechar ao clicar no overlay
        overlay.addEventListener('click', function() {
            paragraph.style['-webkit-line-clamp'] = '4'; // Retornar para 4 linhas
            box.classList.remove('active');
            overlay.classList.remove('active');
            closeButton.remove();
        });
    });
});