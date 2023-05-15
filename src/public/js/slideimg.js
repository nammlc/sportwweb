let currentImageIndex = 0;
const images = document.querySelectorAll('.nam_new-hot--slide');
const length = images.length;
images[currentImageIndex].style.opacity = 1;
if(images){
    function nextImage(){
        images[currentImageIndex].style.opacity = '0';
        currentImageIndex = (currentImageIndex + 1) % length;
        images[currentImageIndex].style.opacity = 1;

    }

    setInterval(nextImage, 5000);
}