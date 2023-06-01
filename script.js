const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const Btn = document.querySelector('.btn-group');
const bimage =  document.getElementById('images');
const pimage  = document.getElementsByClassName('pimages');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();
 
yesBtn.addEventListener('click', () => {
    question.innerHTML = ' <br> <br> <br>  Thank u vely much :) ';
    
  Btn.style.display='none';
  // bimage.style.display='none';
  // pimage.style.display='none';


});



noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
    
    
});
