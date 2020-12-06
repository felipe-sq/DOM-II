// Your code goes here
// * `mouseover`


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