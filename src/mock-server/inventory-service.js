const products = {}

function subscribeToInventoryUpdates(product, callbackFunction) {
  if (products[product.name])
    products[product.name].subscriptions.push(callbackFunction)
  else
    products[product.name] = {inventory: getRandomInt(15), subscriptions: [callbackFunction]}
}

function unsubscribe(product) {
  products[product.name].subscriptions = []
}

function decrementInventory(product) {
  console.log(products[product.name])
  products[product.name].inventory = products[product.name].inventory - 1
  products[product.name].subscriptions.forEach(fn => fn.call(null, products[product.name].inventory))
}

function incrementInventory(product) {
  products[product.name].inventory = products[product.name].inventory + 1
  products[product.name].subscriptions.forEach(fn => fn.call(products[product.name].inventory))
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

export default { subscribeToInventoryUpdates, unsubscribe, decrementInventory, incrementInventory }