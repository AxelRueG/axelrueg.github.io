const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
    console.log(menu.classList);
}

const elements = document.querySelector('.elements')
const points = document.querySelectorAll('.point')

points.forEach( (point, i) => {
    points[i].addEventListener('click', () => {
        elements.style.transform = `translateX(${ i * -25 }%)`
        points.forEach( (point, j ) => points[j].classList.remove('point-active'))

        points[i].classList.add('point-active')
    })
} )

// handle more button
const containers = document.querySelectorAll('.container__item');

// Iterate over each container
containers.forEach((container, i) => {
    // Find the button inside the current container
    const button = containers[i].querySelector('button');
    const info = containers[i].querySelector('.container__item__content');
    
    // Add event listener to the button
    button.addEventListener('click', () => {
        // Your event handler logic here
        if (button.textContent === '+') {
            info.classList.add('container__item__content-active')
            button.textContent = '-'
        } else {
            info.classList.remove('container__item__content-active')
            button.textContent = '+'
        }
    });
});