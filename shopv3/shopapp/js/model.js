const productOperations = {
    products:[],
    sort(){
        return this.products.sort((firstObject, secondObject)=>firstObject.price-secondObject.price);
    },
    count(){
        return this.products.filter(product=>product.isAdded).length;
    },
    toggle(id){
        
         var obj = this.products.find(product=>product.id==id);
        if(obj){
            obj.toggle();
        }
        },
    search(price){
        if(price){
        return this.products.filter(product=>product.price==price); 
        }
        else{
            return this.products;
        } 
    },
    itemsInCart(){
        
    }
}