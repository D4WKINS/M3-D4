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
// console.log(checkout)
// checkout.basket.push('hello')
// console.log(checkout)

/*
1) Display the list of items available on the page using template literals `` and .forEach DONE
2) Add a "add to cart button" DONE
3) When the button is pressed, change the style of the item and add it to another list
4) Add "skip" button next to each item
5) When pressed, the button should remove from the page the item not interesting from the user
*/

window.onload = function(){

    

    fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())

.then(data=> {
    console.log(data)
displayBooks(data)
        return data
})


.catch(err => console.log(err))
}


function displayBooks(books){
    const main = document.getElementById("book-page")
    const search = document.getElementById("search-bar")

    
    search.addEventListener("keyup" ,(e) => {

        if(e.target.value.length > 2){
           
     books.filter(book => book.title.includes(e.target.value))

     console.log(filtered)
     main.innerHTML = ""
     filtered.forEach(book => {
        main.innerHTML+= `
            <div class="col-12 col-md-4 col-lg-3 my-3  align-items-stretch ">
                <div class="card">
                    <img class="img-fluid book-img" src= "${book.img}">
                    <div class="card-body p-0 justify-content-center">
                    <div class="card-header">${book.title}</div>
                    <div class="lead text-center "> £${book.price}</div>
                    <a class="btn bg-dark text-white mt-auto w-100" style="border-radius:0">add to cart</a>
                    </div>
                </div>
                    `
            })
        }
    })
  
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