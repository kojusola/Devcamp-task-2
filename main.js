var carts = document.querySelectorAll('.bot');
var product = []
for(var i = 0; i<carts.length;i++){
    carts[i].addEventListener('click', ()=>{
        cartNumbers();
    })
}
function onLoadCartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelectorAll('.headCart span')[0].textContent= productNumbers;
    }
}
onLoadCartNumbers()
 function cartNumbers(){
     var productNumbers = localStorage.getItem('cartNumbers');
     productNumbers= parseInt(productNumbers);
     if (productNumbers){
        document.querySelectorAll('.headCart span ')[0].innerText = productNumbers + 1;
        localStorage.setItem('cartNumbers', productNumbers +1);
     } else{
         document.querySelectorAll('.headCart span ')[0].innerText= 1;
         localStorage.setItem('cartNumbers', 1);
 }
 }
var addCart = document.querySelectorAll('.bot')
for(var i =0; i < addCart.length; i++){
    var bott = addCart[i]
    bott.addEventListener('click',addToCartClicked)
}
function addToCartClicked(e){
    var containCartName = localStorage.getItem('productsTitleInCart')
    var containCartPrice = localStorage.getItem('productspriceInCart')
    var containCartImage = localStorage.getItem('productsimageInCart')
    var botton = e.target
    var shopItem = botton.parentElement.parentElement.parentElement
    console.log(shopItem)
    var title = [shopItem.querySelectorAll('.shopItem-name')[0].innerText]
    var price = [shopItem.querySelectorAll('.shopItem-price')[0].innerText]
    var imgSrc = [shopItem.querySelectorAll('.shopItem-img')[0].src]
    console.log(imgSrc)
    console.log(containCartImage)
    if(containCartName === null){
        localStorage['productsTitleInCart'] = JSON.stringify(title)
        localStorage.setItem("productspriceInCart", JSON.stringify(price))
        localStorage.setItem("productsimageInCart", JSON.stringify(imgSrc))
    }else if(containCartName === title){
        alert('This item is already added to cart')
    } else{
        var newstring = title[0]
        var productsTitleInCart = JSON.parse(localStorage['productsTitleInCart']);
        productsTitleInCart.push(newstring);
        localStorage.setItem('productsTitleInCart', JSON.stringify(productsTitleInCart))
        var newprice = price[0]
        var productspriceInCart = JSON.parse(localStorage['productspriceInCart']);
        productspriceInCart.push(newprice);
        localStorage.setItem('productspriceInCart', JSON.stringify(productspriceInCart))
        var newimg = imgSrc[0]
        var productsimageInCart = JSON.parse(localStorage['productsimageInCart']);
        productsimageInCart.push(newimg);
        localStorage.setItem('productsimageInCart', JSON.stringify(productsimageInCart))
        }
    }
var pradd = document.querySelector('.pradd');
console.log(pradd)
pradd.addEventListener('click',function(e){
    e.preventDefault();
    cartNumbers()
    addToCartClick(e)
    window.location.replace("cart.html")
})

function addToCartClick(e){
    var containCartName = localStorage.getItem('productsTitleInCart')
    var containCartPrice = localStorage.getItem('productspriceInCart')
    var containCartImage = localStorage.getItem('productsimageInCart')
    var botton = e.target
    var shopItem = botton.parentElement.parentElement.parentElement
    console.log(shopItem)
    var title = [shopItem.querySelectorAll('.shopItem-name')[0].innerText]
    var price = [shopItem.querySelectorAll('.prod-price')[0].innerText]
    var imgSrc = [shopItem.querySelectorAll('.shopItem-img')[0].src]
    console.log(imgSrc)
    console.log(containCartImage)
    if(containCartName === null){
        localStorage['productsTitleInCart'] = JSON.stringify(title)
        localStorage.setItem("productspriceInCart", JSON.stringify(price))
        localStorage.setItem("productsimageInCart", JSON.stringify(imgSrc))
    }else if(containCartName === title){
        alert('This item is already added to cart')
    } else{
        var newstring = title[0]
        var productsTitleInCart = JSON.parse(localStorage['productsTitleInCart']);
        productsTitleInCart.push(newstring);
        localStorage.setItem('productsTitleInCart', JSON.stringify(productsTitleInCart))
        var newprice = price[0]
        var productspriceInCart = JSON.parse(localStorage['productspriceInCart']);
        productspriceInCart.push(newprice);
        localStorage.setItem('productspriceInCart', JSON.stringify(productspriceInCart))
        var newimg = imgSrc[0]
        var productsimageInCart = JSON.parse(localStorage['productsimageInCart']);
        productsimageInCart.push(newimg);
        localStorage.setItem('productsimageInCart', JSON.stringify(productsimageInCart))
        }
    }
