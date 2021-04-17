/*
You are creating the "shopping cart experience" for a Online Marketplace.
You have the list of the available books from the current API:
https://striveschool-api.herokuapp.com/books
*/

/*
What you have to do is:
*/

/*
0) Get all the products from the API using a fetch DONE
*/
let books = []
let checkout = {
    basket:[],
    quantity:0,
    total: 0
}

// console.log(checkout)
// checkout.basket.push('hello')
// console.log(checkout)

window.onload = function(){

    fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())

/*
1) Display the list of items available on the page using template literals `` and .forEach DONE
*/

/*
2) Add a "add to cart button" DONE
*/

/*
3) When the button is pressed, change the style of the item and add it to another list
*/

/*
4) Add "skip" button next to each item
*/



/*
5) When pressed, the button should remove from the page the item not interesting from the user
*/
.then( items => {
    let list = document.querySelectorAll('.list .row')
    
    // items.forEach(item => console.log(item.img))
   
    books.push(...items)
   console.log(books)
        items.forEach(item => {
            let div = document.createElement('div')
            div.classList.add('col-6','col-md-3', 'my-5')
            div.innerHTML = `
            <dd class="book">
                <div class="card h-100">
                    <img class="img-fluid" src= "${item.img}">
                    <div class="card-body p-0 justify-content-center">
                    <div class="card-header">${item.title}</div>
                    <div class="lead text-center py-4"> £${item.price}</div>
                    <a class="btn btn-light mt-auto w-100" style="border-radius:0">add to cart</a>
                    </div>
                </div>
            </dd>
                   `
            list[0].appendChild(div)
        })

        addToCart(items)
        return items
})


.catch(err => console.log(err))
}


const addToCart = (item) =>{

let btn = document.getElementsByClassName('btn')
let cart = document.getElementById('cart')
let quantity = document.getElementById('quantity')
let total = document.getElementById('total')


    for(let i = 0; i < books.length; i++){
        btn[i].addEventListener('click',(event) =>{
           
                checkout.basket.push(books[i].title + ": "+ "&#163"+ books[i].price)

                checkout.total += books[i].price
                total.innerText = checkout.total

                checkout.quantity += 1
                quantity.innerText = checkout.quantity
           

    cart.innerHTML += `
    <dd class="book, col-12">
            <dd class="lead p-0 justify-content-center">${books[i].title + ": "+ books[i].price}</dd>
            </div>
        </div>
    </dd>
           `


    
        })
    }

    
}


/*
6) Add a "search bar". When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)
*/



/*
7) Allow the user to delete items from the cart list
*/

/*
[EXTRA]
*/

/*
8) Add a "clean cart" button, to clean the whole list.
*/

/*
9) Create a second "detail page" for the product. When the user clicks on a product name, the app should redirect him to the secondary page, passing the ASIN in query string
*/


/*
10) In page "detail" show some details of the selected product (https://striveschool-api.herokuapp.com/books/1940026091 to fetch the details of a specific book)
*/