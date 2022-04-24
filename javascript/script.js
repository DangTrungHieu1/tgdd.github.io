//---------------------------------------------------------------------------------------
const baoquan = document.querySelector(".thongso")
const chitiet  = document.querySelector(".chitiet")
const bigimg = document.querySelector(".product-content-left-big-img img")
const smalimg = document.querySelectorAll(".product-content-left-small-img img")
smalimg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigimg.src = imgItem.src
    })
})



if(baoquan){
    baoquan.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-thongso").style.display = "block"
    })
}
if(chitiet){
    chitiet.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-thongso").style.display = "none"
    })
}
const button = document.querySelector(".product-content-right-product-bottom-top")
if(button){
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}