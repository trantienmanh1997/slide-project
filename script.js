let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.swiper-slide');
  const buttonNext =  document.getElementById('next')
  const buttonPrev =  document.getElementById('prev')
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  if(n == slides.length-1){
    document.querySelector('.swiper-button-next').style.borderColor = '#d9d9d9'
    document.querySelector('.swiper-button-next').style.color = '#f1f1f1'
    buttonNext.disabled=true
  }
  if(n < slides.length-1){
    buttonNext.disabled=false
    document.querySelector('.swiper-button-next').style.cursor = 'pointer'
    document.querySelector('.swiper-button-next').style.borderColor = '#fff'
    document.querySelector('.swiper-button-next').style.color = '#007aff'
  }
  if(n>=1){
    buttonPrev.disabled=false
    document.querySelector('.swiper-button-prev').style.cursor = 'pointer'
    document.querySelector('.swiper-button-prev').style.borderColor = '#fff'
    document.querySelector('.swiper-button-prev').style.color = '#007aff'
  }
  if(n==0){
    document.querySelector('.swiper-button-prev').style.borderColor = '#d9d9d9'
    document.querySelector('.swiper-button-prev').style.color = '#f1f1f1'
    buttonPrev.disabled=true
  }
  
  const slideWidth = slides[0].clientWidth;
  console.log(slideWidth)
  console.log(slideIndex)
  document.querySelector('.swiper-wrapper').style.transform = `translateX(${-slideWidth * slideIndex}px)`;
}