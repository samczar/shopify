## Application Specification is below.

### To go to cart click on the Cart Icon

1 React-Native Practical Task Brief

1.1 Objective:
Create a basic shopping mobile app in React-Native, Redux & TypeScript
1.2 Supplied:
Products in an array (these do not require any editing).
const products = [
{name: “Sledgehammer”, price: 125.75},
{name: “Axe”, price: 190.50},
{name: “Bandsaw”, price: 562.13},
{name: “Chisel”, price: 12.9},
{name: “Hacksaw”, price: 18.45}
]
1.3 Requirements:
Build a shopping list and checkout in React-Native using Redux to store and persist state, React-Navigation to move
between the products list and checkout screen. The code should be written in TypeScript.
o The cart will need to keep its state during app loads / refreshes
o List Products – these should always be listed to allow adding of products until checkout
o Products should be listed in this format: product name, price, button to add product
o Must be able to add a product to the cart
o Must be able to view number of current products in the cart
o Cart products should be listed in this format: product name, price, quantity, total, remove button
o Product totals should be tallied to give an overall total
o Must be able to remove a product from the cart
o Adding an existing product will only update existing cart product quantity (e.g. adding the same product
twice will NOT create two cart items)
o All prices should be displayed to 2 decimal places
o Use best practices
