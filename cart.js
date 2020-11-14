
//cart functions
function updateTotal(){
    var cartItem = document.querySelectorAll('.cart-items')[0]
    var cartRows = cartItem.querySelectorAll('.cart-names')
    console.log(cartRows)
    var total = 0;
    for (var i =0; i< cartRows.length; i++){
        var cartRow = cartRows[i];
        var price = cartRow.querySelectorAll('.cart-price')[0];
        var quantity = cartRow.querySelectorAll('.quant')[0];
        var price = parseInt(price.innerText.replace('$' , ''));
        var quantity = quantity.value;
        total += (price*quantity);
        console.log(total)
        
    }
    document.querySelectorAll('.total-price')[0].innerText = '$'+ total;
}
var quantityInputs = document.querySelectorAll('.quant');
for (var i=0 ; i< quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change',quantitychanged)
}
function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value)|| input.value<=0){
        input.value=1
    }
    updateTotal()
}

function loadingPage(){
    var containCartName = localStorage.getItem('productsTitleInCart')
    var containCartPrice = localStorage.getItem('productspriceInCart')
    var containCartImage = localStorage.getItem('productsimageInCart')
    containCartName = JSON.parse(containCartName)
    containCartPrice = JSON.parse(containCartPrice)
    containCartImage = JSON.parse(containCartImage)
    for( var i in containCartName){
        title = containCartName[i];
        imageSrc = containCartImage[i];
        price = containCartPrice[i];
        console.log(imageSrc)
        addItemToCart(title, imageSrc ,price);
    }
    updateTotal()
}

loadingPage()




function addItemToCart(title, imageSrc, price){
    var cartRow = document.createElement('div')
    var cartItems = document.querySelectorAll('.cart-items')[0]
    var cartRowContents = 
        `<div class="row cart-names">
        <div class="col-4 clm">
            <img src="${imageSrc}" alt="" class="image">   
            <span class="cartItem-name">"${title}"</span>
        </div>
        <div class="col-2 clm cart-price">
            ${price}
        </div>
        <div class="col-3 clm cart-quantity">
            <input type="number" value="1" class="quant">
            <button class="btn btn-danger danger" type="button">Remove</button>
        </div>
        </div>` 
        cartRow.innerHTML= cartRowContents;
        cartItems.append(cartRow);
        console.log(cartItems);
}; 
var quantityInputs = document.querySelectorAll('.quant');
for (var i=0 ; i< quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener('change',quantitychanged)
}
function quantitychanged(event){
    var input = event.target
    if(isNaN(input.value)|| input.value<=0){
        input.value=1
    }
    updateTotal()
}
var removecart = document.querySelectorAll('.danger')
for(var i=0; i < removecart.length; i++){
    var rembutton = removecart[i]
    console.log(rembutton)
    rembutton.addEventListener('click', function(){
        var buttonclicked = event.target
        removeLocal()
        buttonclicked.parentElement.parentElement.remove()
        updateTotal()
    })
}
function removeLocal(){
    var containCartName = localStorage.getItem('productsTitleInCart')
        var containCartPrice = localStorage.getItem('productspriceInCart')
        var containCartImage = localStorage.getItem('productsimageInCart')
        containCartName = JSON.parse(containCartName)
        containCartPrice = JSON.parse(containCartPrice)
        containCartImage = JSON.parse(containCartImage)
        containCartPrice.splice(containCartPrice[i],1);
        console.log(containCartPrice)
        containCartImage.splice(containCartImage[i],1);
        containCartName.splice(containCartName[i],1);
        localStorage.setItem("productspriceInCart",JSON.stringify(containCartPrice));
        localStorage.setItem("productsimageInCart",JSON.stringify(containCartImage));
        localStorage.setItem("productsTitleInCart",JSON.stringify(containCartName));
        var productNumbers = localStorage.getItem('cartNumbers');
        localStorage.setItem('cartNumbers', productNumbers -1);
        onLoadCartNumbers()
}
function onLoadCartNumbers(){
    var productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelectorAll('.headCart span')[0].textContent= productNumbers;
    }
}