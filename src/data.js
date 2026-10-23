class item{
    constructor(id,title,price,category,image){
        this.id=id;
        this.title=title;
        this.price=price;
        this.category=category;
        this.image=image;
    }       
}

let rice = new item(1,"rice", 1000, "Alimentos", "https://www.pexels.com/photo/white-rice-in-bowl-1640777/");
let milk = new item(2,"milk", 5000, "Alimentos", "https://www.pexels.com/photo/white-milk-in-glass-1640777/");
let arepas = new item(3,"arepas", 2000, "Alimentos", "https://www.pexels.com/photo/white-rice-in-bowl-1640777/");
let cheese = new item(4,"cheese", 1500, "Alimentos", "https://www.pexels.com/photo/white-rice-in-bowl-1640777/");
let cookies = new item(5,"cookies", 3000, "Alimentos", "https://www.pexels.com/photo/white-rice-in-bowl-1640777/");
let soap = new item(6,"soap", 1000, "Higiene", "https://www.pexels.com/photo/white-rice-in-bowl-1640777/");

const inventary =[rice, milk, arepas, cheese, cookies, soap];