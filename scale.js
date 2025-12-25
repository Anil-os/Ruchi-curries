// Auto-scale the frame to fit the viewport
function scaleFrame() {
    const frame = document.getElementById('frame');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const scaleX = windowWidth / 1440;
    const scaleY = windowHeight / 1024;
    const scale = Math.min(scaleX, scaleY);
    
    frame.style.transform = `scale(${scale})`;
}

window.addEventListener('load', scaleFrame);
window.addEventListener('resize', scaleFrame);
