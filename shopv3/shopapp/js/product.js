class Product{
    constructor(id, name, price, url ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.url= url;
        this.isAdded = false;
        this.wishList = false;
    }
    toggle(){
        this.isAdded= !this.isAdded;
    }
}