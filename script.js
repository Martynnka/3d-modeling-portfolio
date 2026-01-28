const scrollContainer = document.querySelector('.gallery-scroll');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

// ⬇️ ČIA įrašyk visus savo paveikslėlių kelius
const galleryImages = [
  'Examples/Example1.png',
  'Examples/Example2.png',
  'Examples/Example3.png',
  'Examples/Example4.png',
  'Examples/Example5.png',
  'Examples/Example6.png',
  'Examples/Example7.png',
  'Examples/Example8.png'

];

// Pridėti paveikslėlius į galeriją
galleryImages.forEach(path => {
  const img = document.createElement('img');
  img.src = path;
  img.alt = 'Gallery image';
  img.style.width = '300px'; // gali keisti plotį
  img.style.marginRight = '10px';
  scrollContainer.appendChild(img);
});

// Mygtukai
btnLeft.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});

btnRight.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});

// ✅ Automatinis slinkimas kas 3 sekundes su loop
setInterval(() => {
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

  if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
    scrollContainer.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  } else {
    scrollContainer.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
}, 3000);


// === Hero nuotraukos keitimas ===
const heroImage = document.getElementById('hero-image');

const imagePaths = [
  'Images/Hero1.png',
  'Images/Hero2.png',
  'Images/Hero3.png',
  'Images/Hero4.png'
];

let currentImage = 0;

setInterval(() => {
  currentImage = (currentImage + 1) % imagePaths.length;
  heroImage.src = imagePaths[currentImage];
}, 3000);



