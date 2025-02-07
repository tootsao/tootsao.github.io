const texts = [
    "Vytváříme weby, které zaujmou a prodávají.",
    "Pomáháme firmám růst prostřednictvím silné online přítomnosti.",
    "Profesionální weby, které odrážejí vaši jedinečnost.",
    "Získejte online přítomnost, která vás dostane na vrchol.",
    "Navrhujeme digitální řešení, která spojují funkčnost a design.",
    "Tvoříme weby s důrazem na detail a uživatelskou přívětivost.",
    "Inovativní design a technologie pro váš úspěch na internetu.",
    "Moderní weby, které vašim zákazníkům usnadní život."
];

let currentText = 0;
let textIndex = 0;
let isDeleting = false;
let typedText = "";
const typingSpeed = 150; // Typing speed (milliseconds)
const deletingSpeed = 100; // Deleting speed (milliseconds)
const changeDelay = 1000; // Time delay before changing text (milliseconds)

function typeText() {
    const target = document.getElementById("typed-text");

    if (!isDeleting && textIndex < texts[currentText].length) {
        typedText += texts[currentText][textIndex];
        textIndex++;
        target.textContent = typedText;
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && textIndex > 0) {
        typedText = typedText.slice(0, -1);
        textIndex--;
        target.textContent = typedText;
        setTimeout(typeText, deletingSpeed);
    } else if (!isDeleting && textIndex === texts[currentText].length) {
        isDeleting = true;
        setTimeout(typeText, changeDelay);
    } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        currentText = (currentText + 1) % texts.length;
        setTimeout(typeText, changeDelay);
    }
}

typeText();

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = document.querySelector('.custom-navbar').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight, // Adjust for the navbar height
            behavior: 'smooth'
        });
    });
});