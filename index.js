let cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 let itemObject = {};
 itemObject['itemName'] = item;
 let price = Math.floor((Math.random() * 100) + 1)
 itemObject['itemPrice'] = price;
 cart.push(itemObject)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  let inMyCart = 'In your cart, you have'
  for (let i = 0; i < cart.length; i++) {
    return `${inMyCart} ${cart[i]['itemName']} at $${cart[i]['itemPrice']}.`
  }
}

function total() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let itemObject = cart[i];
    for (let key in itemObject) {
      if (typeof itemObject[key] === 'number') {
        total += itemObject[key];
      }
    }
  }
  return total;
}

function removeFromCart(item) {
  if (!cart.includes(item)) {
    return 'That item is not in your cart.'
  }
  else {
    let itemIndex = cart.indexOf(item);
    cart.splice(itemIndex, 1)
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
