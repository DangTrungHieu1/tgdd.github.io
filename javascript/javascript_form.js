//code chạy form
const addressbtn = document.querySelector('#adress-form')
const addressclosebtn = document.querySelector('#adress-close')

//console.log (rightbtn)
addressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "flex"
})
addressclosebtn.addEventListener("click", function(){
    document.querySelector('.adress-form').style.display = "none"
})
//slider
let index = 0
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
rightbtn.addEventListener("click", function(){
    index = index+1
    if(index > imgNumber.length-1){
        index=0
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
leftbtn.addEventListener("click", function(){
    index = index-1
    if(index < 0){
        index= imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
})
//slider-chon
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image, index){

    image.addEventListener("click", function(){
        removeactive()
        document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
        image.classList.add("active")
    })
})
function removeactive() {
    let imgactive = document.querySelector('.active')
    imgactive.classList.remove("active")
}
//slider p2
function imgAuto(){
    index = index +1
    if(index > imgNumber.length-1){
        index=0
    }
    removeactive()
    document.querySelector(".slider-content-left-top").style.right = index * 100+"%"
    imgNumberLi[index].classList.add("active")
}
setInterval(imgAuto,5000)
//Silder-product-------------------------------------
const rightbtntwo = document.querySelector('.fa-chevron-right-two')
const leftbtntwo = document.querySelector('.fa-chevron-left-two')
const imgNumbertwo = document.querySelectorAll('.silder-product-one-content-items')
rightbtntwo.addEventListener("click", function(){
    index = index+1
    if(index > imgNumbertwo.length-1){
        index=0
    }
    document.querySelector(".slider-product-one-content-items-contents").style.right = index * 100+"%"
})
leftbtntwo.addEventListener("click", function(){
    index = index-1
    if(index < 0){
        index= imgNumbertwo.length-1
    }
    document.querySelector(".slider-product-one-content-items-contents").style.right = index * 100+"%"
})
