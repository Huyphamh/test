var mentBTN = document.querySelector('.menu-btn');
var nav = document.querySelector('.nav')
mentBTN.addEventListener("click", ()=>{
    mentBTN.classList.toggle('active');
    nav.classList.toggle('active');
});
//JS SLIDER VIDEO
var btns = document.querySelectorAll('.nav-btn')
var slides = document.querySelectorAll('.video-slide')
var contents = document.querySelectorAll('.content')
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick=function(){
        for(var k = 0;k <btns.length; k++){
            btns[k].classList.remove('active');
        }
        this.classList.add('active');
        var nutactive =  this;
        var vt=0;
        for(vt = 0; nutactive=nutactive.previousElementSibling;vt++){}
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active');
            slides[vt].classList.add('active');
            contents[i].classList.remove('active')
            contents[vt].classList.add('active')
        }
    }
}
autoSlide();
function autoSlide(){
    var thoigian=setInterval(function(){
        var vtslide = 0;
        var slidehientai = document.querySelector('.video-slide.active');
        for(var vtslide=0;slidehientai=slidehientai.previousElementSibling;vtslide++){}
        if(vtslide <(slides.length-1)){
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                btns[i].classList.remove('active');
                contents[i].classList.remove('active')
            }
            slides[vtslide].nextElementSibling.classList.add('active');
            btns[vtslide].nextElementSibling.classList.add('active');
            contents[vtslide+1].classList.add('active')
        }
        else{
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                btns[i].classList.remove('active');
                contents[i].classList.remove('active')
            }
            slides[0].classList.add('active');
            btns[0].classList.add('active');
            contents[0].classList.add('active')
        }
    },8000)
}
  