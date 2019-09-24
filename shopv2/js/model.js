const productOperations = {
    products:[],
    sort(){

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