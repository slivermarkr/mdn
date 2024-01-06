const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageNames = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
];
/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */
for(const images of imageNames){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images}`);
    newImage.setAttribute('alt', alts[images]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    })
}



/* Wiring up the Darken/Lighten button */
  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if(btnClass === 'dark'){
        btn.textContent = 'Lighten'
        btn.setAttribute('class', 'light')
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.textContent = 'Darken';
        btn.setAttribute('class','dark');
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
