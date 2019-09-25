window.addEventListener('load',init);
function init(){
    displayCount();
 bindEvents();
 getData();
}
function displayCount(){
   document.querySelector('#total').innerText =  productOperations.count();
}
function bindEvents(){
    document.querySelector('#sortby').addEventListener('change',sortIt);
    document.querySelector('#searchtxt').addEventListener('change',searchIt);
}
function sortIt(){
    printProducts(productOperations.sort());
}
function addToCart(){
    console.log('Add to Cart Called ',this.getAttribute('productid'));
    var id = this.getAttribute('productid');
    productOperations.toggle(id);
    displayCount();

}
function print(){

}
function searchIt(){
   var price =  document.querySelector('#searchtxt').value;
   printProducts(productOperations.search(price));
}
function printProducts(products){
    document.querySelector('#products').innerHTML="";
    products.forEach(product=>{
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = product.url;
        div.appendChild(img);
        let pTag = document.createElement('p');
        pTag.innerText = 'Name '+product.name + ' Price '+product.price;
        let button = document.createElement('button');
        button.innerText = 'Add to Cart';
        button.addEventListener('click',addToCart); // button.addToCart()
        button.setAttribute('productid',product.id);
       // button.id = product.id;
        div.appendChild(pTag);
        div.appendChild(button);

        document.querySelector('#products').appendChild(div);
    });
   
}
function getData(){
    var pr = fetch('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');
    pr.then(response=>{
        response.json().then(data=>{
            console.log('Data is ',data);
            for(let d of data['mobiles']){
                productOperations.products.push(new Product(d.id, d.name,d.price,d.url));
            }
           // productOperations.products = data['mobiles'];
            printProducts(productOperations.products);
        }).catch(err=>{
            console.log("INvalid JSON ",err);})
        }).catch(err=>{
        console.log("Invalid URL or Server Down ",err);
    });
}