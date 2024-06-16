const modal = document.getElementById('modal');
const modal2 = document.getElementById('modal2');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const additionalImages = document.getElementById('additional-images');

const images = [
    { src: 'backServer.png' },
    { src: 'backLanguage.png' },
    { src: 'backDeveloper.png' },
    { src: 'backEngineering.png' },
    { src: 'backAi.png' },
    { src: 'backCooperation.png' },
    { src: 'backProduct.png' },
    { src: 'backWeb.png' },
    { src: 'backUser.png' }
];

let currentImageIndex = 0;

function openModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const modalText = document.getElementById('modalText');
    modal.style.display = "flex";
    modalImg.src = images[currentImageIndex].src;
    modalText.textContent = images[currentImageIndex].text;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const modalImg = document.getElementById('modalImg');
    const modalText = document.getElementById('modalText');
    modalImg.src = images[currentImageIndex].src;
    modalText.textContent = images[currentImageIndex].text;
}

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        closeModal();
    }
});

modal2.addEventListener('click', function (event) {
    if (event.target === modal2) {
        closeAbout();
    }
});

function openAbout() {
    const modal = document.getElementById('modal2');
    modal.style.display = 'flex';
}

function closeAbout() {
    const modal = document.getElementById('modal2');
    modal.style.display = "none";
}