
// category generation
var category = document.getElementById("nav-tab")
var category_items = document.getElementById("nav-tabContent")

for (cat in Data['category']){
    // console.log(Data['category'][cat]['items'])
    tabs = `<button class="nav-link" id="nav-${cat}-tab" data-bs-toggle="tab" data-bs-target="#nav-${cat}"
                    type="button" role="tab" aria-selected="true"><span class="iconify" data-icon="${Data['category'][cat]["icon"]}"></span> ${cat}</button>`
    category.innerHTML += tabs;

    items = `
        <div class="tab-pane fade " id="nav-${cat}" role="tabpanel">
        <div class="row">
        `
    Data_items = Data['category'][cat]['items']
    console.log(Data_items)
    for (i in Data_items){
        console.log(i)
        items += `
        <div class="col">
        <div class="card rounded ms-2 mt-2" style="width: 18rem;">
        <a href="/item.html?category=${cat}&itemid=${i}">
        <img src="/img/${Data_items[i]["image"]}" id="product-img" class="card-img-top mt-2" alt="Product Image">
        </a>
        <div class="card-body">
            <h4 class="card-title text-center">${Data_items[i]["title"]}
                <h4 class="text-decoration-line-through">₹${Data_items[i]["first-price"]}</h4>
                <h4>₹${Data_items[i]["last-price"]}<span class="badge bg-danger text-center ms-1">${Data_items[i]["discount"]}</span></h4>
            </h4>
            <p class="card-text">${Data_items[i]["description"].slice(0,106)}...</p>
            <a href="/item.html?category=${cat}&itemid=${i}" class="col-5 btn btn-outline-primary">Buy Now</a>
            <a onClick="AddToCart();" class="col-6 btn btn-outline-primary">Add To Cart</a>
        </div>
    </div>
    </div>`
    }
    category_items.innerHTML += items
    category_items.innerHTML += "</div></div>"
}

document.getElementById("nav-Electronics-tab").classList.add("active")
var ele = document.getElementById("nav-Electronics")
ele.classList.add("show")
ele.classList.add("active")
