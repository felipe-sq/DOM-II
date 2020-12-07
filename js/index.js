// Your code goes here
// * `mouseover`
const imgTags = Array.from(document.querySelectorAll('img'));
console.log(imgTags)

document.addEventListener('mouseover', (e) => {
    e.target.style.border = '2.5px solid green';
// tried adding currentTarget to further drill down on only the tags or elements which are directly under the mouse, but this produced errors. 
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

const wheelPTags = document.querySelectorAll('p');
console.log(wheelPTags);
//resizing all p tags did not work with the code I currently have; only able to resize the first p tag that the selector finds

function wheelResize(e) {
    e.preventDefault();
  
    scale += e.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    wheelPTransform.style.transform = `scale(${scale})`;
  }
  
  let scale = 3;
  const wheelPTransform = document.querySelector('p');
  wheelPTransform.onwheel = wheelResize;

// * `load`

window.addEventListener('load', () => {
    console.log('The Fun Bus Agency Site is locked and loaded!');
  });

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