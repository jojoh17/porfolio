const btnMenu= document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')
})

if(window.matchMedia('(max-width: 1300px)')){

    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active')
        })
    })
}

// Animation écriture

const txtAnim= document.querySelector('.txt-animation');

let typewriter = new Typewriter(txtAnim, {
    loop:false,
    deleteSpeed: 20,

})

typewriter
.pauseFor(1800)
.changeDelay(30)
.typeString("Je suis Johanna")
.pauseFor(500)
.typeString('<strong>, Assistante Virtuelle</strong>')
.pauseFor(1000)
.typeString('<span style="color: #27ae60;"> bilingue anglais</span> !')
.pauseFor(1000)
.deleteChars(18)
.typeString('<span style="color: #ff6910;"> polyvalente</span> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color:orange;"> formatrice</span> !')
.start()

//animation contact 

const input_fields = document.querySelectorAll('input');

for(let i =0; i < input_fields.length;i++) {

    let field = input_fields[i];

    field.addEventListener('input', (e) => {
        if(e.target.value !== ''){
            e.target.parentNode.classList.add('animation')
        } else if (e.target.value == ''){
            e.target.parentNode.classList.remove('animation')
        }

        
    })


}
//animation GSAP + ScrollMagic 

const navbar = document.querySelector('.nav-gauche');
const titre=document.querySelector('h1')
const btn = document.querySelectorAll('.btn-acc')
const btnMedias = document.querySelectorAll('.media')
const btnRondAccueil = document.querySelector('.btn-rond')



const TL1 = gsap.timeline({paused:true});

TL1
.to(navbar, {left:'0px' , ease: Power3.easOut, duration:0.10})
.from(titre, {y:-50, opacity:0, ease:Power3.easOut, duration:0.4})
.staggerFrom(btn, 1, {opacity:0}, 0.2, '-=0.30')
.staggerFrom(btnMedias, 1, {opacity:0}, 0.2, '-=0.75')
.from(btnRondAccueil, {y: -50, opacity:0, ease:Power3.easOut, duration:0.4}, '-=1')


window.addEventListener('load', () => {
    TL1.play();
})

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector('.presentation')
const titrePres = document.querySelector('.titre-pres');
const presGauche = document.querySelector('.pres-gauche')
const listePres = document.querySelectorAll('.item-liste')

const tlpres = new TimelineMax();

tlpres
.from(titrePres, {y: -200, opacity: 0, duration: 0.6})
.from(presGauche, {y:-20, opacity: 0, duration: 0.6}, '-=0.5')
.staggerFrom(listePres, 1, {opacity: 0}, 0.2, '-=0.5')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: presentationContainer,
    triggerHook: 0.5,
    reverse: false
})
.setTween(tlpres)
.addIndicators()
.addTo(controller)

// Anim Portfolio