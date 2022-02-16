const sizes = document.querySelectorAll('.size');
const gradients = document.querySelectorAll('.gradient');

let animationEnd = true;
function changeSize() {
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

function changeColor() {
    if(!animationEnd) return;

    // get atributes
    let primaryColor = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let camiseta = document.querySelector(`.camiseta[color="${color}"]`);
    let gradient = document.querySelector(`.gradient[color="${color}"]`);
    let prevGradient = document.querySelector(`.gradient[color="${prevColor}"]`);

    colors.forEach(color => color.classList.remove('active'));
    this.classList.add('active');   
    
    document.documentElement.style.setProperty('--primary', primaryColor);

    camisetas.forEach(camiseta => camiseta.classList.remove('show'));
    camiseta.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    });
} 

sizes.forEach(size => size.addEventListener('click', changeSize));

let screen = window.matchMedia("(max-width: 1000px)");

function changeHeight() {
    if(screen.matches) {
        let camisetaHeight = camisetas[0].offsetHeight;
        camisetaBg.style.height = `${camisetaHeight * 0.9}px`;
    
    } else {
        camisetaBg.style.height = "475px";
    }
}


