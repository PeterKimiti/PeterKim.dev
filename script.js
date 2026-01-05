let cards = document.querySelectorAll('.card');

function rotateCards() {
    let angle = 0;
    cards.forEach( (card, index) => {

        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        }else{
            card.style.transform =`rotate( ${angle}deg)`;
        angle= angle - 10;
        
        card.style.zIndex= cards.length - index;
        }

        
    });
}
rotateCards();

let stackArea = document.querySelector('.skills');
window.addEventListener('scroll', ()=>{
    let distance = window.innerHeight/2;

    let topVal = stackArea.getBoundingClientRect().top;
    let index = -1 * (topVal / distance + 1);
    index= Math.floor(index);

    for (let i = 0; i < cards.length; i++) {
        if (i <= index) {
            cards[i].classList.add("away");
        }else{
            cards[i].classList.remove("away");
        }
        
    }
    rotateCards();
});

const roles = [
    "GRAPHIC DESIGNER",
    "MOBILE APP DESIGNER",
    "VIDEO EDITOR",
    "WEB DESIGNER",
    "MS OFFICE PRO",
    "PROGRAMMER"
];

const typingElement = document.getElementById("typing-roles");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 60;
const holdDelay = 1500;

function typeRoles(){
    const currentRole = roles[roleIndex];

    if (!isDeleting && charIndex < currentRole.length) {
        typingElement.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeRoles, typingSpeed);

    } else if (isDeleting && charIndex > 0) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeRoles, deletingSpeed);

    } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, holdDelay);
        setTimeout(typeRoles, holdDelay);

    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRoles, typingSpeed);
    }
}

typeRoles();


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // stop normal form submit

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `Hello Peter,%0A%0A` +
        `👤 Name: ${name}%0A` +
        `📧 Email: ${email}%0A` +
        `📞 Phone: ${phone}%0A%0A` +
        `💬 Message:%0A${message}`;

    const whatsappURL = `https://wa.me/254742744502?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
});

