function toggleMenu(){
    if (innerWidth < 1024 ){
        var menuToggle = document.querySelector('.toggle');
        menuToggle.classList.toggle('open');
        var navigatation = document.querySelector('.navigatationBar');
        navigatation.classList.toggle('open');
    }
}
function thumbNail(product){

    document.querySelector('.mainImage').src = product.src;
    document.querySelector('.mainImage').alt = product.alt;
}
// function imgBox_height(){
//     var x = document.querySelector('.learnMore').style.height;
//     document.querySelector('.imageBox').style.minHeight = x + 'px';
// }