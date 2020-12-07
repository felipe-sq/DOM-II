// Your code goes here
// * `mouseover`
const imgTags = Array.from(document.querySelectorAll('img'));
console.log(imgTags)


// function imgBorder(e) {
//     e.target.style.border = '5px solid green';
// };


// reset the color after a short delay
// setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);

document.addEventListener('mouseover', (e) => {
    e.target.style.border = '2.5px solid green';

    setTimeout(function() {
        e.target.style.border = '';
    }, 400);
}, false);



// * `keydown`
const pTags = document.querySelectorAll('p');

function downKey(e) {
    console.log(e);
    if(e.key === 'ArrowDown') {
        const pTagsBlue = pTags.forEach(e => e.style.color = 'blue');
    } else if(e.key === 'ArrowUp') {
        const pTagsBlack = pTags.forEach(e => e.style.color = 'green');
    };
  }
document.addEventListener('keydown', downKey);

// * `wheel`


// * `load`


// * `focus`


// * `resize`
window.addEventListener('resize', () => {
    alert('The Fun Bus window has been resized!')
});

// * `scroll`
// * `select`
// * `dblclick`
document.addEventListener('dblclick', (e) => {
    alert('Save your clicks! Double-clicks are not needed on the \'Net! :)');
});

// * `drag / drop`