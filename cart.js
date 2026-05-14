
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'TOMATO',
        image : "https://th.bing.com/th/id/OIP.691Hw6NXrfwl4cskWAja_QHaFj?rs=1&pid=ImgDetMain",
        price: 30 
    },
    {
        id: 2,
        name: 'GINGER',
        image: "https://www.eatingwell.com/thmb/3kciNkbDMbne5_idW3zspqsXf7U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gigner-peeling-hack-396e818a5c774258a7688a679f4436e3.jpg",
        price: 120
    },
    {
        id: 3,
        name: 'POTATO',
        image: 'https://static.toiimg.com/photo/92522114.cms',
        price: 20
    },
    {
        id: 4,
        name: 'CUCUMBER',
        image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?cs=srgb&dl=pexels-lo-2329440.jpg&fm=jpg',
        price: 40
    },
    {
        id: 5,
        name: 'CARROT',
        image: 'https://images.healthshots.com/healthshots/en/uploads/2023/04/03155814/carrots.jpg',
        price: 25
    },
    {
        id: 6,
        name: 'LEMON',
        image: 'https://media.istockphoto.com/id/466175634/photo/lemon-fruit-with-half-and-leaves-isolated-on-white.jpg?s=612x612&w=0&k=20&c=yRkrtlYtXd1O2EsPaxzOI1TSJOQ3kaf8XUzPe1ODoOo=',
        price: 50
    },
    {
        id: 7,
        name: 'CAPSICUM',
        image: 'https://e1.pxfuel.com/desktop-wallpaper/1023/1022/desktop-wallpaper-bell-pepper-capsicum-thumbnail.jpg',
        price: 50
    },
    {
        id: 8,
        name: 'BOTTLE GOURD',
        image: 'https://farmscart.com/file/2017/09/farmscart-bottlegourd-suman.webp',
        price: 20
    },
    {
        id: 9,
        name: 'PUMPKIN',
        image: 'https://t4.ftcdn.net/jpg/02/83/13/63/360_F_283136302_g7keyrnAqH391XRQHj18KmTH8DEOEUjk.jpg',
        price: 15
    },
    {
        id: 10,
        name: 'Broccoli',
        image: 'https://th.bing.com/th/id/OIP.BgD7_QDBCoXRaqa60v5whgHaHi?rs=1&pid=ImgDetMain',
        price: 100
    },
    {
        id: 11,
        name: 'Lady Fingers',
        image: 'https://i.pinimg.com/originals/03/f6/8f/03f68f8dc3f9a12db18130ec462cdd5e.jpg',
        price: 60
    },
    {
        id: 12,
        name: 'Cauliflower',
        image: 'https://th.bing.com/th/id/R.64a2e89884bb7b41b31d37c0107e8bca?rik=bnFNpAciTWeyhw&riu=http%3a%2f%2fwww.deliveryathome.co.in%2fmedia%2fcatalog%2fproduct%2fcache%2f1%2fimage%2f9df78eab33525d08d6e5fb8d27136e95%2fc%2fa%2fcauliflower_1.jpg&ehk=vTMQ1CccTbeRaxV%2bbG9Q%2b1%2b7Sx9ZF%2bbSRh4FDA9nHn0%3d&risl=&pid=ImgRaw&r=0',
        price: 30
    },
    {
        id: 13,
        name: 'Bitter Melon',
        image: 'https://cdn.shopify.com/s/files/1/0663/9613/articles/Bittergourd.webp?v=1687165171',
        price: 90
    },
    {
        id: 14,
        name: 'Sweet Potato',
        image: 'https://th.bing.com/th/id/OIP.BxzJhOigpCoy2bOiNXHOmQHaE8?rs=1&pid=ImgDetMain',
        price: 70
    },
    {
        id: 15,
        name: 'Cabbage',
        image: 'https://i.pinimg.com/originals/b5/e0/19/b5e019a6196b332b6e1829043e17b2fa.jpg',
        price: 40
    },
    {
        id: 16,
        name: 'Corn',
        image: 'https://images7.alphacoders.com/718/thumb-1920-718926.jpg',
        price: 40
    },
    {
        id: 17,
        name: 'Onion',
        image: 'https://produits.bienmanger.com/36700-0w600h600_Organic_Red_Onion_From_Italy.jpg',
        price: 24
    },
    {
        id: 18,
        name: 'Fudina',
        image: 'https://th.bing.com/th/id/R.4afd22c0d753251bdd87146067da1ce6?rik=UcZ%2bgSNSdwloHg&riu=http%3a%2f%2fwww.thailandmedical.news%2fuploads%2feditor%2ffiles%2fpeppermint_scene_9cb9ce86-8f7a-456e-adfc-fe99aadf5c23.jpg&ehk=2csd1d7%2f%2bGuStj91n1GW2jjOkRkNK6YvbwGFgIxGjQM%3d&risl=&pid=ImgRaw&r=0',
        price: 50
    },
    {
        id: 19,
        name: 'Coriander',
        image: 'https://5.imimg.com/data5/DI/IH/MY-5553683/fresh-coriander-leaves-500x500.jpg',
        price: 20
    },
    {
        id: 20,
        name: 'Garlic',
        image: 'https://th.bing.com/th/id/OIP.F2C2nDHAVEInmB1NmbSJ3gHaFj?rs=1&pid=ImgDetMain',
        price: 220
    },
    {
        id: 21,
        name: 'Avocado',
        image: 'https://th.bing.com/th/id/OIP.WHaF6GYG5JacYCHtHEeAegHaIJ?rs=1&pid=ImgDetMain',
        price: 400
    },
    {
        id: 21,
        name: 'Snap pea',
        image: 'https://th.bing.com/th/id/OIP.6mewyv5aO7psYJvuaTn9qwHaHa?pid=ImgDetMain',
        price: 120
    },
    {
        id: 22,
        name: 'Beet',
        image: 'https://th.bing.com/th/id/OIP.z_QG7ZhsSEbAn7zCRglPTwHaHa?pid=ImgDetMain',
        price: 45
    },
    {
        id: 23,
        name: 'Green Chilli',
        image: 'https://static.tnfoodie.in/thumb/msid-84145761,imgsize-69987,width-800,height-550,resizemode-4/pic.jpg',
        price: 50
    },
    {
        id: 24,
        name: 'Apple',
        image: 'https://th.bing.com/th/id/R.517aca2a65ebdb191e6f7de2dc3a42f1?rik=hksE2fjwuhX70g&riu=http%3a%2f%2fwww.onewheaton.com%2funtold%2fwp-content%2fuploads%2f2015%2f02%2fapples2.jpg&ehk=46CMLUj0sQwwMwRpDJAwl8EGzCBAHgfZfUoYIKlMwOo%3d&risl=&pid=ImgRaw&r=0',
        price: 100
    },
    {
        id: 25,
        name: 'Banana',
        image: 'https://th.bing.com/th/id/OIP.EQm8UWBwKi22UEM7_G2sYwD0Es?pid=ImgDetMain',
        price: 40
    },
    {
        id: 26,
        name: 'Orange',
        image: 'https://th.bing.com/th/id/R.9356dcb38215405e903364d2a5fa70f5?rik=V09OJOURhPcB%2fQ&riu=http%3a%2f%2fimages.clipartpanda.com%2forange-clipart-img1341036368.jpg&ehk=5bu93pbIXgqbNfIBCIJXQpejpg2u5EzCkxyRysRZYU4%3d&risl=&pid=ImgRaw&r=0',
        price: 90
    },
    {
        id: 27,
        name: 'Grape',
        image: 'https://i.pinimg.com/originals/7f/9b/d0/7f9bd0448fbae5d30acd168c2e862237.jpg',
        price: 80
    },
    {
        id: 28,
        name: 'Mango',
        image: 'https://ilarge.lisimg.com/image/6486273/740full-mango.jpg',
        price: 100
    },
    {
        id: 29,
        name: 'Pineapple',
        image: 'https://th.bing.com/th/id/OIP.7eI1wudMQX4oVpJmjp1OuAHaLH?pid=ImgDetMain',
        price: 70
    },
    {
        id: 30,
        name: 'Strawberry',
        image: 'https://c1.peakpx.com/wallpaper/159/85/261/strawberry-red-fruity-delicious-wallpaper.jpg',
        price: 230
    },
    {
        id: 31,
        name: 'Watermelon',
        image: 'https://th.bing.com/th/id/OIP.NTO1-yC1feYI5o-WmtLt8QHaHv?pid=ImgDetMain',
        price: 20
    },
    {
        id: 32,
        name: 'Kiwi',
        image: 'https://th.bing.com/th/id/OIP.m43gHMWuzA57rA2ILMAaZgHaHp?pid=ImgDetMain',
        price: 220
    },
    {
        id: 33,
        name: 'Papaya',
        image: 'https://th.bing.com/th/id/OIP.CE-CdufzAYj0GrlrRSt9OQHaLH?pid=ImgDetMain',
        price: 50
    },
    {
        id: 34,
        name: 'Dragon fruit',
        image: 'https://tipbuzz.com/wp-content/uploads/Types-of-Dragon-Fruit--1024x1536.jpg',
        price: 500
    },
    {
        id: 35,
        name: 'Guava',
        image: 'https://th.bing.com/th/id/OIP.Hgcz7EWIdb3FmHVKHbAqXwHaGq?pid=ImgDetMain',
        price: 80
    },
    {
        id: 36,
        name: 'Pear',
        image: 'https://i0.wp.com/www.goodwholefood.com/wp-content/uploads/2016/08/pear-single-green.jpg?w=2400',
        price: 150
    },
    {
        id: 37,
        name: 'Lychee',
        image: 'https://th.bing.com/th/id/OIP.TvmikeOn8zW9P7oLl5_qmwHaFn?pid=ImgDetMain',
        price: 250
    },
    {
        id: 38,
        name: 'Star fruit',
        image: 'https://th.bing.com/th/id/OIP.M8nRXMYq4cozQHhSKCogRwHaJ9?pid=ImgDetMain',
        price: 130
    },


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
       
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

