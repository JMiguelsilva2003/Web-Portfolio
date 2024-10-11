var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1,
        }
    }
});

const serviceBoxes = document.querySelectorAll('.card');
const aboutSection = document.querySelector('.about');
const aboutTitle = aboutSection.querySelector('h2');
const aboutContent = aboutSection.querySelector('p');

// Adiciona evento de clique em cada botão "Read More"
serviceBoxes.forEach(box => {
    const readMoreBtn = box.querySelector('.button');
    const projectTitle = box.querySelector('.name').textContent;
    
    // Obtém o conteúdo HTML completo, incluindo imagens e outras tags
    const projectDescriptionHTML = box.querySelector('.description').innerHTML;

    // Obtém apenas o texto sem HTML para mostrar nos cards
    const projectDescriptionText = box.querySelector('.description').textContent;

    // Mostra só o texto no card
    box.querySelector('.description').textContent = projectDescriptionText;

    readMoreBtn.addEventListener('click', function(event) {
        event.preventDefault();

        // Atualizar o conteúdo da seção "Sobre o Projeto"
        aboutTitle.textContent = `${projectTitle}`;
        
        // Aqui usamos o innerHTML para incluir tags como imagens
        aboutContent.innerHTML = projectDescriptionHTML;

        // Rolar suavemente até a seção "Sobre o Projeto"
        aboutSection.scrollIntoView({ behavior: 'smooth' });

        // Tornar a seção visível
        aboutSection.classList.add('active');
    });
});
