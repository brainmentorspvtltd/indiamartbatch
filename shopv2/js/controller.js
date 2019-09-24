window.addEventListener('load',init);
function init(){
 bindEvents();
 getData();
}
function bindEvents(){
    document.querySelector('#searchtxt').addEventListener('change',searchIt);
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
        div.appendChild(pTag);
        document.querySelector('#products').appendChild(div);
    });
   
}
function getData(){
    var pr = fetch('https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json');
    pr.then(response=>{
        response.json().then(data=>{
            console.log('Data is ',data);
            productOperations.products = data['mobiles'];
            printProducts(productOperations.products);
        }).catch(err=>{
            console.log("INvalid JSON ",err);})
        }).catch(err=>{
        console.log("Invalid URL or Server Down ",err);
    });
}