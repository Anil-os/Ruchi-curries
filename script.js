// State
let currentIndex = 0;
const totalSlides = 4;

// Descriptions for each slide
const descriptions = [
    "A legendary dum-cooked biryani from Hyderabad, made with fragrant basmati rice, tender meat, and royal spices, slow-sealed to lock in rich aroma and deep, authentic flavour.",
    "Chicken kebab is a flavorful dish made with tender chicken pieces marinated in a blend of aromatic spices, herbs, yogurt, and lemon juice. The marinated chicken is skewered and grilled or roasted until perfectly cooked, giving it a smoky aroma, juicy texture, and slightly charred outer layer.",
    "prawns cooked in rich butter and aromatic garlic, gently seasoned with herbs, pepper, and a hint of spice. Finished with a splash of lemon for a fresh, savoury flavour, this dish is light, juicy, and perfect as a starter or side.",
    "Tender pieces of mutton slow-cooked in a rich, spicy gravy made with onions, tomatoes, and traditional Indian spices. This hearty and flavourful curry has deep aromas and is best enjoyed with steamed rice, roti, or naan."
];

// Rotation angles for background
const rotations = [-8.95, -116.28, -206.06, -285.89];

// Progress bar positions
const progressPositions = [175, 430, 625, 820];

// Bottom image configurations for each slide
const imageConfigs = [
    // Slide 0 - Biryani active
    {
        biryani: { top: 685, left: 85, width: 235, height: 235 },
        kebab: { top: 730, left: 360, width: 165, height: 165 },
        prawns: { top: 730, left: 555, width: 165, height: 165 },
        mutton: { top: 730, left: 750, width: 165, height: 165 }
    },
    // Slide 1 - Kebab active
    {
        biryani: { top: 730, left: 105, width: 165, height: 165 },
        kebab: { top: 685, left: 335, width: 235, height: 235 },
        prawns: { top: 730, left: 600, width: 165, height: 165 },
        mutton: { top: 730, left: 795, width: 165, height: 165 }
    },
    // Slide 2 - Prawns active
    {
        biryani: { top: 730, left: 105, width: 165, height: 165 },
        kebab: { top: 730, left: 300, width: 165, height: 165 },
        prawns: { top: 685, left: 525, width: 235, height: 235 },
        mutton: { top: 730, left: 790, width: 165, height: 165 }
    },
    // Slide 3 - Mutton active
    {
        biryani: { top: 730, left: 105, width: 165, height: 165 },
        kebab: { top: 730, left: 300, width: 165, height: 165 },
        prawns: { top: 730, left: 495, width: 165, height: 165 },
        mutton: { top: 685, left: 720, width: 235, height: 235 }
    }
];

// Elements
const menuText = document.getElementById('menuText');
const description = document.getElementById('description');
const rotatingContainer = document.getElementById('rotatingContainer');
const progressBar = document.getElementById('progressBar');
const biryaniImg = document.getElementById('biryaniImg');
const kebabImg = document.getElementById('kebabImg');
const prawnsImg = document.getElementById('prawnsImg');
const muttonImg = document.getElementById('muttonImg');

// Background images
const bgBiryani = document.querySelector('.bg-biryani');
const bgKebab = document.querySelector('.bg-kebab');
const bgPrawns = document.querySelector('.bg-prawns');
const bgMutton = document.querySelector('.bg-mutton');

// Update slide function
function updateSlide(index) {
    currentIndex = index;
    
    // Update menu text position
    const marginTop = index * -79;
    menuText.style.marginTop = marginTop + 'px';
    
    // Update description with fade
    description.style.opacity = '0';
    setTimeout(() => {
        description.textContent = descriptions[index];
        description.style.opacity = '1';
    }, 200);
    
    // Update rotating background
    rotatingContainer.style.transform = `rotate(${rotations[index]}deg)`;
    
    // Update progress bar
    progressBar.style.left = progressPositions[index] + 'px';
    
    // Hide all background images
    bgBiryani.style.opacity = '0';
    bgKebab.style.opacity = '0';
    bgPrawns.style.opacity = '0';
    bgMutton.style.opacity = '0';
    
    // Show only the active background image
    if (index === 0) bgBiryani.style.opacity = '1';
    else if (index === 1) bgKebab.style.opacity = '1';
    else if (index === 2) bgPrawns.style.opacity = '1';
    else if (index === 3) bgMutton.style.opacity = '1';
    
    // Update bottom images
    const config = imageConfigs[index];
    
    biryaniImg.style.top = config.biryani.top + 'px';
    biryaniImg.style.left = config.biryani.left + 'px';
    biryaniImg.style.width = config.biryani.width + 'px';
    biryaniImg.style.height = config.biryani.height + 'px';
    
    kebabImg.style.top = config.kebab.top + 'px';
    kebabImg.style.left = config.kebab.left + 'px';
    kebabImg.style.width = config.kebab.width + 'px';
    kebabImg.style.height = config.kebab.height + 'px';
    
    prawnsImg.style.top = config.prawns.top + 'px';
    prawnsImg.style.left = config.prawns.left + 'px';
    prawnsImg.style.width = config.prawns.width + 'px';
    prawnsImg.style.height = config.prawns.height + 'px';
    
    muttonImg.style.top = config.mutton.top + 'px';
    muttonImg.style.left = config.mutton.left + 'px';
    muttonImg.style.width = config.mutton.width + 'px';
    muttonImg.style.height = config.mutton.height + 'px';
}

// Click handlers for bottom images
biryaniImg.addEventListener('click', () => updateSlide(0));
kebabImg.addEventListener('click', () => updateSlide(1));
prawnsImg.addEventListener('click', () => updateSlide(2));
muttonImg.addEventListener('click', () => updateSlide(3));

// Initialize
updateSlide(0);
