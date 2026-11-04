class item{
    constructor(id,title,price,category,image){
        this.id=id;
        this.title=title;
        this.price=price;
        this.category=category;
        this.image=image;
    }       
}


let rice = new item(1,"rice", 1000, "Alimentos", "https://picsum.photos/200");
let milk = new item(2,"milk", 5000, "Alimentos", "https://picsum.photos/200");
let arepas = new item(3,"arepas", 2000, "Alimentos", "https://picsum.photos/200");
let cheese = new item(4,"cheese", 1500, "Alimentos", "https://picsum.photos/200");
let cookies = new item(5,"cookies", 3000, "Alimentos", "https://picsum.photos/200");
let soap = new item(6,"soap", 1000, "Higiene", "https://picsum.photos/200");

const inventory =[rice, milk, arepas, cheese, cookies, soap];