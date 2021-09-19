import data from './data.js'

const itemsContainer = document.querySelector('#items');

const cart = [];

// const a = 999;
// const greeting = 'hello';
// const place = 'world';
// const d = 656565;
// const obj = {a, greeting, place, d};

// console.log(obj);
// console.log("***************************");

// ---------------------------------------------
// Add Items
function addItem(name, price, qty) {
	for (let i = 0; i < cart.length; i += 1) {
		if (cart[i].name === name) {
			cart[i].qty += 1;
			return;
		};
	};
	const item = {name, price, qty: 1};
	cart.push(item);
};

// ---------------------------------------------
// Show Items
function showItems() {
	const qty = getQty();
	console.log(`You have ${qty} items in your cart`);

	for (let i = 0; i < cart.length; i += 1) {
		console.log(`- ${cart[i].name} ${cart[i].price} * ${cart[i].qty}`);
	};

	console.log(`Your total in cart: $${getTotal()}`);
};

// ---------------------------------------------
// Get Qty
function getQty() {
	let qty = 0;
	for (let i =  0; i < cart.length; i += 1) {
		qty += cart[i].qty;
	};
	return qty;
};

// ---------------------------------------------
// Get Total
function getTotal() {
	let total = 0;
	for (let i = 0; i < cart.length; i += 1) {
		total += cart[i].price * cart[i].qty;
	};
	return total.toFixed(2);
};

// ---------------------------------------------
// Remove Item
function removeItem(name, qty = 0) {
	for (let i = 0; i < cart.length; i += 1) {
		if (cart[i].name === name) {
			if (qty > 0) {
				cart[i].qty -= qty;
			};

			if (cart[i].qty < 1 || qty === 0) {
				cart.splice(i, 1);
			};
			return
		};
	};
};

// ---------------------------------------------
// ---------------------------------------------
addItem('apple', 0.99);
addItem('orange', 1.29);
addItem('opinion', 0.02);
addItem('apple', 0.99);
addItem('frisbee', 9.92);
addItem('apple', 0.99);
addItem('orange', 1.29);

removeItem('frisbee')
removeItem('apple', 1)

showItems();

// the length of our data determines how many times this loop goes around
for (let i = 0; i < data.length; i += 1) {
	// create a new div element and give it a class name
	const newDiv = document.createElement('div');
	newDiv.className = 'item';
	// create an image element
	const img = document.createElement('img');
	// this will change each time we go through the loop. Can you explain why?
	img.src = data[i].image;
	img.width = 300;
	img.height = 300;
	// Add the image to the div
	newDiv.appendChild(img);
	// put new div inside items container
	itemsContainer.appendChild(newDiv);
	
	//create a p element for description
	const desc = document.createElement('p');
	//add description from data file
	desc.innerText = data[i].desc;
	newDiv.appendChild(desc);

	//create a p element for price
	const price = document.createElement('p');
	//add price from data file
	price.innerText = data[i].price;
	newDiv.appendChild(price);

	const button = document.createElement('button');
	button.id = data[i].name;
	
	// creates a custom attribute called data-price. That will hold price for each element in the button
	button.dataset.price = data[i].price;
	button.innerHTML = "Add to Cart";
	newDiv.appendChild(button);


	console.log(newDiv);

};