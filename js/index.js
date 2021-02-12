// Your code goes here
// * `mouseover`
document.addEventListener('mouseover', (e) => {
    e.target.style.border = '2.5px solid green';
    e.stopPropagation();

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
//trying to resize all 'p' tags with this but it only works on the first 'p' tag that it finds.

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

// * `select`
// moved this code up higher in order to be able to use the 'focus' code with an input form

const inputBox = document.createElement('input');
inputBox.value = 'Sample Text Here';
inputBox.className = 'input-class';
document.querySelector('header.intro p').prepend(inputBox);

const inputArea = document.querySelector('.input-class');

function logSelectedText(e) {
    const selection = e.target.value.substring(e.target.selectionStart, e.target.selectionEnd);
    console.log(`Selected text is ${selection}`);
};

inputArea.addEventListener('select', logSelectedText);

// * `focus`
const focusTags2 = document.querySelector('input.input-class');
console.log(focusTags2);

focusTags2.addEventListener('focus', (e) => {
    e.target.style.background = 'yellow';
});


// * `resize`
window.addEventListener('resize', () => {
    alert('The Fun Bus window has been resized!')
});

// * `scroll`

document.addEventListener('scroll', e => {
    console.log('You have scrolled on the page!');
});



// * `dblclick`
document.addEventListener('dblclick', (e) => {
    alert('Save your clicks! Double-clicks are not needed on the \'Net! :)');
});

// * `drag / drop`
// This code still requires some work
// to be continued ... 
const containerDiv = document.querySelector('div.home')
const dropDiv = document.createElement('div');
containerDiv.appendChild(dropDiv)

dropDiv.classList.add('dropzone')
const dropzone1 = document.createElement('div');
dropzone1.setAttribute('id', 'draggable')
dropzone1.setAttribute('draggable', 'true')
dropzone1.style.border = '10px solid green';
dropzone1.style.background = 'lime'
dropzone1.textContent = "This is the draggable content!"

const dropzone2 = document.createElement('div');
dropzone2.setAttribute('id', 'draggable')
dropzone2.setAttribute('draggable', 'true')
dropzone2.style.border = '10px solid red';
dropzone2.style.background = 'pink';

dropDiv.appendChild(dropzone1)
dropDiv.appendChild(dropzone2)

dropzone1







// * `preventDefault()`
Array.from(document.links).forEach((link) => {
    link.addEventListener('click', (e) => {
      console.log('Successfully prevented a page reload!');
      e.preventDefault();

    });
  });