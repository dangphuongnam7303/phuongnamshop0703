//Function hiển thị lỗi
function show_error(key, message) {
    var error = document.getElementById(`${key}_error`);
    var set_style_error = document.querySelector(`#${key}`);
    error.innerHTML = message;
    error.style = 'color: red';
    document.getElementById(key).style = 'background-color: yellow; border-color: red;';
}

function delete_error(key) {
    document.getElementById(`${key}_error`).innerHTML = '';
}


var flag = true;

function check_form(e) {
    e.preventDefault();
    var req_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var enquiry = document.getElementById('enquiry');
    var message = document.getElementById('messages');

    if (name.value == '') {
        show_error('name', 'Name is required');
        flag = false;
    } else {
        delete_error('name');
    }

    if (email.value == '') {
        show_error('email', 'Email is required');
        flag = false;
    } else {
        if (!req_email.test(email.value)) {
            show_error('email', 'Email is invalid');
            flag = false;
        } else {
            delete_error('email');
        }
    }

    if (subject.value == '') {
        show_error('subject', 'Subject is required');
        flag = false;
    } else {
        delete_error('subject');
    }

    if (enquiry.value == '0') {
        show_error('enquiry', 'Enquiry is required');
        flag = false;
    } else {
        delete_error('enquiry');
    }

    if (message.value == '') {
        show_error('messages', 'Message is required');
        flag = false;
    } else {
        delete_error('messages');
    }

    if (flag) {
        window.location.assign('https://www.facebook.com/');

    }

}

const ListProduct = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/image 26.png",
        category: 1,
        type: 'Snack'
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/image 27.png",
        category: 1,
        type: 'Fish'

    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/image 28.png",
        category: 3,
        type: 'Snack'

    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise ",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/image 29.png",
        category: 4,
        type: 'Healthy'

    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/image 30.png",
        category: 5,
        type: 'Noodle'

    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/image 31.png",
        category: 6,
        type: 'Sweet'

    }
]
const ListCategory = [{
        id: 1,
        name: "Breakfast",
        image: "./src/img/index/image 32.png",
    },
    {
        id: 2,
        name: "Vegan",
        image: "./src/img/index/image 33.png",
    },
    {
        id: 3,
        name: "Meat",
        image: "./src/img/index/image 34.png",
    },
    {
        id: 4,
        name: "Dessert",
        image: "./src/img/index/image 35.png",
    },
    {
        id: 5,
        name: "Lunch",
        image: "./src/img/index/image 36.png",
    },
    {
        id: 6,
        name: "Chocolate",
        image: "./src/img/index/image 37.png",
    }
]

function showProduct(data) {
    const main_content = document.querySelector('.main-content');
    if (main_content) {
        main_content.innerHTML = '';

    }
    for (let item of data) {
        if (main_content) {
            main_content.innerHTML += `
        <div class="main">
        <div class="main-img">
           <a href='detail.html?id=${item.id}'><img src="${item.image}" alt="" style='border-radius:15px'></a> 
            <div><a href="detail.html?id=${item.id}">${item.name}</a></div>
        </div>
        <div class="main-foreign">
            <img width="18px" height="18px" src="src/img/index/Vector.png" alt="">
            <div>30 Minutes</div>
            <img width="15px" height="19.5px" src="src/img/index/ForkKnife.png" alt="">
            <div>${item.type}</div>
        </div>
    </div>
        `
        }

    }
}
showProduct(ListProduct);

const filterSelect = document.querySelector("#filter-select")

function filterProduct() {
    const under30 = ListProduct.filter(function (product) {
        return product.price < 30
    })

    const over30 = ListProduct.filter(function (product) {
        return product.price >= 30
    })
    if (filterSelect.value == 'under30') {
        showProduct(under30)
    }
    if (filterSelect.value == 'over30') {
        showProduct(over30)
    }
    if (filterSelect.value == 'all') {
        showProduct(ListProduct)
    }
}
if (filterSelect) {
    filterSelect.addEventListener("change", filterProduct)
}

function showCategories() {
    const ctg_main = document.querySelector('.ctg-main');
    if (ctg_main) {
        ctg_main.innerHTML = '';
    }
    for (let item of ListCategory) {
        if (ctg_main) {
            ctg_main.innerHTML += `
            <div class="ctg-menu">
                <img src="${item.image}" alt="">
                <p>${item.name}</p>
            </div>
            `
        }

    }

}
showCategories();

function detailProduct() {
    const prdID = new URLSearchParams(window.location.search).get('id');
    if (prdID) {
        const product = ListProduct.find(function (item) {
            return item.id == prdID
        })
        const detailProductDiv = document.querySelector('.banner');
        detailProductDiv.innerHTML = `
        
        <div class="banner-title">
                    <h1>${product.name}</h1>
                    <span id="price">$ ${product.price}</span>
                    <p id="banner-title-p">${product.desc}</p>
                    <div class="button">
                        <input type="text" placeholder="Quanlity">
                        <button  onclick='add_buy(${product.id})'>Add to Cart</button>
                    </div>
        </div>
                <div class="banner-img">
                    <img src="${product.image}" alt="">
                </div>
        `
    }

}
detailProduct();

function showProduct_menu() {
    const prd_menu = document.querySelector('.prd-menu');
    if (prd_menu) {
        prd_menu.innerHTML = '';
    }
    for (let item = 3; item < ListProduct.length; item++) {
        if (prd_menu) {
            prd_menu.innerHTML += `
            <div class="prd-menu-main">
           <a href='detail.html?id=${ListProduct[item].id}'><img src="${ListProduct[item].image}" alt=""></a> 
            <div class="prd-tt">
             <a href='detail.html?id=${ListProduct[item].id}'>${ListProduct[item].name}</a>  
            </div>
            <div class="tt-price">$ ${ListProduct[item].price}</div>
            <button onclick='add_buy(${ListProduct[item].id})'>Add to Cart</button>
        </div>
            `
        }
    }
    detailProduct();
}
showProduct_menu();

function showProduct_menu_2(data) {
    const prd_menu_2 = document.querySelector('.ar_title');
    if (prd_menu_2) {
        prd_menu_2.innerHTML = '';
    }
    for (let item of data) {
        if (prd_menu_2) {
            prd_menu_2.innerHTML += `
            <div class="ar_title_main">
            <a  href="detail.html?id=${item.id}"><img src="${item.image}" alt=""></a> 
            <div class="name"><a href="detail.html?id=${item.id}">${item.name}</a></div>
            <div class="price">$ ${item.price}</div>
            <button onclick='add_buy(${item.id})'>Add To Cart</button>
        </div>
            `
        }
    }
}

function show_menu_product() {
    const menu_product = document.querySelector('.as_menu');
    for (let item of ListCategory) {
        if (menu_product) {
            menu_product.innerHTML += `
            <li><a href="./product.html?cateid=${item.id}">${item.name}</a></li>

            `
        }
    }
}
show_menu_product();

function show_product_cate() {
    const cateid = new URLSearchParams(window.location.search).get('cateid');
    if (cateid) {
        const product_cate = ListProduct.filter(function (item) {
            return item.category == cateid
        })
    }
    if(cateid) {
        showProduct_menu_2(product_cate);
    }else{
        showProduct_menu_2(ListProduct);
    }

}
show_product_cate();
var total = document.querySelector('#total_price');
var buy = [];

function remove(e) {
    var product_remove = buy.find(function (item) {
        return item.id == e
    })
    var index = buy.indexOf(product_remove);
    buy.splice(index, 1);
    var show_buy_item =    function  () {
        const show_buy = document.querySelector('#add_cart');
        if (show_buy) {
            show_buy.innerHTML = '';
        }
        var total_price = 0;
        for (let item of buy) {
 
            if (show_buy) {
                
                    show_buy.innerHTML += `
                <div class="show_buy_item">
                        <img height="50px" width="100px" src="${item.image}" alt="">
                       <div class="name" style="margin:0px;text-align:center ;"><a style="font-size:15px "  href="">${item.name}</a></div>
                        <div style="margin:0px;margin-top: 10px;text-align:center;"><a  class="price">$ ${item.price}</a></div>
                       <button id='remove' onclick='remove(${item.id})'>Remove</button>
                       
                    </div>
                    <hr style='color:black'>
                `    
                             
            }
            

            if(buy.length == 0){
                total_price=0;
            }else{
                total_price += item.price;
            } 

        }
        
        total.value = total_price;
        console.log(buy);

        
    }
    show_buy_item();
}
function add_buy(e) {

        var product = ListProduct.find(function (item) {
            return item.id == e
        })
        buy.push(product); 
    var show_buy_item =    function  () {
            const show_buy = document.querySelector('#add_cart');
            if (show_buy) {
                show_buy.innerHTML = '';
            }
            var total_price = 0;
            for (let item of buy) {
                if (show_buy) {
                    
                        show_buy.innerHTML += `
                    <div class="show_buy_item">
                            <img height="50px" width="100px" src="${item.image}" alt="">
                           <div class="name" style="margin:0px;text-align:center ;"><a style="font-size:15px "  href="">${item.name}</a></div>
                            <div style="margin:0px;margin-top: 10px;text-align:center;"><a  class="price">$ ${item.price}</a></div>
                           <button id='remove' onclick='remove(${item.id})'>Remove</button>
                        </div>
                    `                  
                }
                
                total_price += item.price;
                total.value = total_price;

            }
            console.log(buy);
            
        }
        show_buy_item();
        
}
var check_show = document.querySelector('#show_buy');
var cart=document.querySelector('#show_cart_item');
function showDetailCart(){
    if(!check_show.checked) {
        if(cart.style.display==='none'){
            cart.style.display='block';
        }else{
            cart.style.display='none';
        }
    }
   
  
}
function hideCart(){
    if(!check_show.checked){
        cart.style.display='none';
}
}
function buy_now(){
    buy=[];
    const show_buy = document.querySelector('#add_cart');
    show_buy.innerHTML ='';
    const alert_buy = document.querySelector('#alert_buy');
    alert_buy.style.display ='block';
}
