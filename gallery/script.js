const mainPhoto = document.getElementById('main-photo');
const row = () => Array.from(document.getElementsByClassName('photo'));
const setMainImage = (index) => mainPhoto.className = 'image' + index.toString();

setMainImage(0);


const clickFn = (event) => {
    setMainImage(parseInt(event.target.id.replace('p', '')));
    console.log(event.target);
};


row().forEach(photo => photo.addEventListener('click', clickFn));

