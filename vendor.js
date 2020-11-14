$('.logout').click(function(e){
    e.preventDefault();
    window.location.replace("index.html")
})
$('.home').click(function(e){
    e.preventDefault();
    addHomepage();
})
function addHomepage(){
    var homepage = `  
     <h1>Enter Your Product Details</h1>
    <form action="">
        <input type="text" class="pname" id="name" placeholder="Enter product name"><br>
        <input type="text" id="pcategory" placeholder="Enter product category " class="category"><br>
        <input type="text" id="price" placeholder="Enter product price " class="price"><br>
        <input type="text" id="image" name="image" placeholder="Enter product image" class="form-control"><br>
        <label for="description">Product Description</label><br>
        <textarea name="description" id="msg" cols="25" rows="2" required></textarea><br>
        <button type="submit" class="submit">SUBMIT</button><br>
    </form>`
$('.main-content').html(homepage) ;
}
$('.submit').click(function(e){
    e.preventDefault();
    addDetails();
});
function addDetails(){
    var localname = localStorage.getItem('title');
    console.log(localname)
    var localprice = localStorage.getItem('price');
    var localimage = localStorage.getItem('image');
    var localcategory = localStorage.getItem('category');
    var localdescription = localStorage.getItem('description');
    var name = [$('.pname').val()];
    console.log(name);
    var price = [$('#price').val()];
    var image = [$('#image').val()];
    var category = [$('#pcategory').val()];
    var description = [$('#msg').val()];
    if(localname === null || localname === undefined){
        localStorage.setItem("title", JSON.stringify(name))
        localStorage.setItem("price", JSON.stringify(price))
        localStorage.setItem("image", JSON.stringify(image))
        localStorage.setItem("category", JSON.stringify(category))
        localStorage.setItem("description", JSON.stringify(description))
    } else{
        var newstring = name[0]
        var localname = JSON.parse(localStorage['title']);
        localname.push(newstring);
        localStorage.setItem('title', JSON.stringify(localname))
        var newprice = price[0]
        var localprice = JSON.parse(localStorage['price']);
        localprice.push(newprice);
        localStorage.setItem('price', JSON.stringify(localprice))
        var newimg = image[0]
        var localimage = JSON.parse(localStorage['image']);
        localimage.push(newimg);
        localStorage.setItem('image', JSON.stringify(localimage))
        var newcat = category[0]
        var localcategory = JSON.parse(localStorage['category']);
        localcategory.push(newcat);
        localStorage.setItem('category', JSON.stringify(localcategory))
        var newdes = description[0]
        var localdescription = JSON.parse(localStorage['description']);
        localdescription.push(newdes);
        localStorage.setItem('description', JSON.stringify(localdescription))
        }
    }
    var products = []
    var myLength= JSON.parse(localStorage['title']);
    for(var i in myLength){
        var check = {productname: JSON.parse(localStorage['title'])[i],
                productPrice: JSON.parse(localStorage['price'])[i],
                productimage: JSON.parse(localStorage['image'])[i],
                productCategory: JSON.parse(localStorage['category'])[i],
                productdescription: JSON.parse(localStorage['description'])[i]}
    products.push(check)
    }
$('.list').click(function(e){
    e.preventDefault();
    making();
})
function making(){
var state={
    'queryset': products,
    'page': 1,
    'rows':5
}
buildtable()
}

function pagination( queryset, page, rows){
    var trimstart =(page-1)*rows
    var trimend = trimstart + rows
    var trimedData = queryset.slice(trimstart, trimend)
    var pages = Math.ceil(queryset.length/rows)
    return{
        'queryset':trimedData,
        'pages': pages
    }
}
function buildtable(){
    var state={
        'queryset': products,
        'page': 1,
        'rows':5
    }
    $('.main-content').html("") ;
    var data = pagination(state.queryset, state.page, state.rows);
    var myList = data.queryset;
    for(i in myList){
        var List = `
        <div class="list" id="list">
        <div class="eachnode">
            <img src= ${myList[i].productimage} alt="">
            <a href="#" class="namelink" onclick="edt()"><p>${myList[i].productname}</p></a>
            <p>${myList[i].productPrice}</p>
        </div>
    </div>`
    $('.main-content').append(List)
    $('.main-content').addClass("another")
    }
    pageButtons( state.page)

}
function pageButtons(page){
    for (var i =1; i<=page; i++){
        var done = `<button value=${i} class="page">${i}</button>`
        $('.main-content').append(done);
    }
}
$('.page').click(function(e){
    var state={
        'queryset': products,
        'page': 1,
        'rows':5
    }
    e.preventDefault()
    $('.main-content').empty()
    state.page=$(this).val(
        buildtable()
    )
})

    $(".namelink").click(function(e){
        e.preventDefault()
        $('.main-content').html("")
            var content=`
            <h1>Enter Your Product Details</h1>
        <form action="">
            <input type="text" class="pname" id="name" placeholder=${JSON.parse(localStorage['title'])[i]} value=${JSON.parse(localStorage['title'])[i]}><br>
            <input type="text" id="pcategory" placeholder="Enter product category " class="category" valur=$[JSON.parse(localStorage['price'])[i]]><br>
            <input type="text" id="price" placeholder="Enter product price " class="price"><br>
            <input type="text" id="image" name="image" placeholder="Enter product image" class="form-control"><br>
            <label for="description">Product Description</label><br>
            <textarea name="description" id="msg" cols="25" rows="2" required></textarea><br>
            <button type="submit" class="submit">SUBMIT</button><br>
        </form>`
    })
    function edt (){
        $('.main-content').html("")
            var content=`
            <h1>Edit Your Product Details</h1>
        <form action="">
            <input type="text" class="pname" id="name" value=${JSON.parse(localStorage['title'])[i]}><br>
            <input type="text" id="pcategory" placeholder="Enter product category " class="category" value= ${JSON.parse(localStorage['category'])[i]}><br>
            <input type="text" id="price" placeholder="Enter product price " class="price" value= ${JSON.parse(localStorage['price'])[i]} ><br>
            <input type="text" id="image" name="image" placeholder="Enter product image" class="form-control" value=${JSON.parse(localStorage['image'])[i]}><br>
            <label for="description">Product Description</label><br>
            <textarea name="description" id="msg" cols="25" rows="2" required value=${JSON.parse(localStorage['description'])[i]}></textarea><br>
            <button type="submit" class="submit">SUBMIT</button><br>
        </form>`
        $('.main-content').html(content)
    }
