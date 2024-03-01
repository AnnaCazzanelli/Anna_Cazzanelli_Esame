//Seleziona l'elemento HTML con l'id "menu" e lo memorizza nella variabile menu.
const menu = document.querySelector('#menu')
// Seleziona l'elemento HTML con l'id "toggle" e lo memorizza nella variabile toggle.
const toggle = document.querySelector('#toggle')
// Definisce una funzione chiamata toggleMenu che verrà eseguita quando si fa clic sull'elemento toggle. 
const toggleMenu = () => {
    //Questa funzione alterna le classi CSS "is-active" su toggle e "active" su menu.
    toggle.classList.toggle('is-active')
    menu.classList.toggle('active')
}

// Aggiunge un ascoltatore di eventi che attende il caricamento completo del documento HTML, quindi esegue una funzione 
document.addEventListener('DOMContentLoaded', () => {
    //All'interno di questa funzione, viene aggiunto un ascoltatore di eventi che attende i clic sull'elemento toggle e chiama la funzione toggleMenu quando avviene un clic.
    toggle.addEventListener('click', toggleMenu)

})

//la funzione anim viene definita per gestire le animazioni
function anim() {

    //  timeline di animazione per l'elemento #titolo
    const titolo = gsap.timeline({
        scrollTrigger: {
            trigger: "#bio",
            start: "top 60px", // Inizia l'animazione quando l'elemento è 60px sopra la viewport
            scrub: true, // Collega l'animazione allo scorrimento del mouse
            markers: false, // Mostra i marcatori di debug
        }
    });

    // Animazione per far entrare l'elemento #titolo2
    titolo.from("#titolo", { opacity: 0, x: -200, duration: 0.5 });

    // Crea una timeline di animazione per l'elemento #titolo2
    const titolo2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#titolo2",
            start: "top 100px", // Inizia l'animazione quando l'elemento è 100px sopra la viewport
            end: "top 20px",//l'animazione finisce quando l'elemento è 20px sopra la viewport
            scrub: true, // Collega l'animazione allo scorrimento del mouse
            markers: false, // Mostra i marcatori di debug
        }
    });

    // Animazione per far entrare l'elemento #titolo2
    titolo2.from("#titolo2", { opacity: 0, x: -200, duration: 0.5 });
}

// Chiamata alla funzione anim() quando il documento HTML è pronto
document.addEventListener("DOMContentLoaded", anim);