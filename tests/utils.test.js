const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function(){
  const area = utils.area(5,6)
  expect(area).to.be.a('number')
  expect(area).to.equal(30)
})

it("should return the perimeter of a 5 by 6 rectangle", function() {
  const perimeter = utils.perimeter(5,6)
  expect(perimeter).to.be.a('number')
  expect(perimeter).to.equal(22)
})

it("should return the area of a circle of radius 5", function(){
  const circlearea = utils.circleArea(5)
  expect(circlearea).to.be.a('number')
  expect(circlearea).to.equal(78.53981633974483)
})
// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
  const tempObject = utils.createItem("apple", 0.99)
  expect(tempObject).to.be.a('object')
  expect(tempObject).to.have.property("name", "apple")
  expect(tempObject).to.have.property("price", 0.99)
  expect(tempObject).to.have.property("quantity", 1)
})

it("Should add a new item to the shopping cart", function() {
  banana = utils.createItem('banana', 20)
  apple = utils.createItem('apple', 35)
  utils.addItemToCart(banana)
  utils.addItemToCart(apple)
  const tempObject2 = utils.logArray()
  expect(tempObject2[0]).to.have.property('name', 'banana')
  expect(tempObject2[1]).to.have.property('name', 'apple')
})

it("Should return an array containing all items in cart", function() {
  // const item = {name: 'apple', price: 5.99}
  // const array = utils.addItemToCart(item)
  const item = utils.createItem()
  const array = [{name: 'apple', price: 0.99}]
  const loggingArray = utils.logArray(array)
})

it("Should return the number of items in the cart", function() {
  const cart = utils.cartItemCounter()
  banana = utils.createItem('banana', 20)
  apple = utils.createItem('apple', 35)
  utils.addItemToCart(banana)
  utils.addItemToCart(apple)
  // expect(cart).to.have.lengthOf(1)
})

it("Should remove items from cart", function() {
  const cart = utils.cartItemCounter()
  banana = utils.createItem('banana', 20)
  apple = utils.createItem('apple', 35)
  utils.addItemToCart(banana)
  utils.addItemToCart(apple)
  utils.addItemToCart(apple)
  utils.addItemToCart(apple)
  utils.removeItem(apple)
  // expect(cart).to.have.lengthOf(4)

})

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
