const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const heading4 = document.querySelector('.four');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    setTimeout(() => {
        heading1.style.color = 'red';
        setTimeout(() => {
            heading2.style.color = 'green';
            setTimeout(() => {
                heading3.style.color = 'blue';
                setTimeout(() => {
                    heading4.style.color = 'brown';
                }, 500);
            }, 1000);
        }, 2000);
    }, 1000);
});