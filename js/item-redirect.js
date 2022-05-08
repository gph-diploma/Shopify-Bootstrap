let params = (new URL(window.location.href)).searchParams;

category = params.get('category')
id = params.get('itemid')

item = Data['category'][category]['items'][id]

document.getElementById("product-img").src = "/img/" + item["image"]
document.getElementById("product-title").innerHTML = item["title"]
document.getElementById("product-price").innerHTML = item["first-price"]
document.getElementById("discount-tag").innerHTML = item["discount"]
document.getElementById("our-price").innerHTML = item["last-price"]
document.getElementById("description").innerHTML = item["description"]