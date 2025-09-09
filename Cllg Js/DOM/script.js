const imgElement = document.querySelector('#box img');
let imgArr = ["photo1.avif", "photo2.avif", "photo3.avif", "photo4.avif"];
let currentIndex = 0;

function showImage(index) {
    imgElement.setAttribute('src', imgArr[index]);
}
  
showImage(currentIndex);

setInterval(() => {
    currentIndex = (currentIndex + 1) % imgArr.length;
    showImage(currentIndex);
}, 2000);
