const texts = [
    "Údržba elektrických vedení.",
    "Kamionová doprava.",
    "Odtahová služba.",
    "Rozvoz balíčků.",
    "Oprava a tuning vozidel."
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

$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var znacka = button.data('znacka')
    var model = button.data('model')
    var rok = button.data('rok')
    var spz = button.data('spz')
    var vin = button.data('vin')
    var tachometr = button.data('tachometr')
    var img1 = button.data('img1')
    var img2 = button.data('img2')
    var img3 = button.data('img3')
    var protokol = button.data('protokol')
    var cena = button.data('cena')
    var modal = $(this)
    modal.find('.modal-title').text(rok + " " + znacka + " " + model)
    modal.find('.modal-body p#znacka-text').html("<b>Tovární značka:</b> " + znacka)
    modal.find('.modal-body p#model-text').html("<b>Model:</b> " + model)
    modal.find('.modal-body p#rok-text').html("<b>Rok výroby:</b> " + rok)
    modal.find('.modal-body p#spz-text').html("<b>Státní Poznávácí Značka:</b> " + spz)
    modal.find('.modal-body p#vin-text').html("<b>Identifikační číslo vozidla (VIN):</b> " + vin)
    modal.find('.modal-body p#tachometr-text').html("<b>Stav tachometru:</b> " + tachometr + " km")
    modal.find('.modal-body img#img1').attr("src", img1)
    modal.find('.modal-body img#img2').attr("src", img2)
    modal.find('.modal-body img#img3').attr("src", img3)
    modal.find('.modal-body img#protokol').attr("src", protokol)
    modal.find('.modal-footer h3').html(cena + " Kč")
})

$('#exampleModal').on('hide.bs.modal', function () {
    $('#collapseExample').collapse('hide');
});