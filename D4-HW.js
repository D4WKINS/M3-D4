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
   
        items.forEach(item => {
           
            let div = document.createElement('div')
            div.classList.add('col-12','col-md-6', 'my-5')
          
            div.innerHTML = `
            <dd class="book">
                <div class="card h-100">
                    <img class="img-fluid" src= "${item.img}">
                    <div class="card-body p-0 justify-content-center">
                    <div class="card-header">${item.title}</div>
                    <a class="btn btn-primary mt-auto">add to cart</a>
                    </div>
                </div>
            </dd>
                   `
            list[0].appendChild(div)
        })
   
})


.then(list =>{
    console.log(books)
    let list1 = document.querySelector('list[0]')
    let btn = document.querySelectorAll('a .btn')
    for(let i =0; i< books.length; i++){
    btn.addEventListener("click",()=>{
        list1.removeChild(book[i])

    })
}
} )








.catch(err => console.log(err))
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