// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================
shoppingCart = []

const createItem = (name,price) => {
  // should return json object for item
  return {name: name, price: price, quantity: 1}
}

const addItemToCart = (item) => {
  // should add to cart
  // return carts current state
  // item = createItem(name, price)
  // shoppingCart.push(item)
  for(let i=0; i < shoppingCart.length; i++) {
    if (item.name === shoppingCart[i].name) {
      shoppingCart[i].quantity += item.quantity
      return 
    }
  }
  shoppingCart.push(item)
}

const logArray = () => {
  // should return array
  return shoppingCart
}

const cartItemCounter = () => {
  let numItems = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    numItems += shoppingCart[i].quantity
  }
  return numItems
}

const removeItem = (item) => {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === item) {
      shoppingCart[i].quantity--
      if (shoppingCart[i].quantity === 0) {
        shoppingCart.splice(i, 1)
      }
      return
    }
  }
}

// addItemToCart("apple", 20)
// addItemToCart('banana', 30)
// logArray()


module.exports = { 
  sayHello, area, perimeter, circleArea, createItem, addItemToCart,
  logArray, cartItemCounter, removeItem
}
