import data from './data.js';

const itemsContainer = document.querySelector('#items');

const itemList = document.getElementById('item-list');
itemList.innerHTML = '';
console.log(itemList);

const cartQty = document.getElementById('cart-qty');

console.log(cartQty);

const cartTotal = document.getElementById('cart-total');
console.log(cartTotal);


const cart = [];

// ---------------------------------------------
// Handle change events on update input
itemList.onchange = function(e) {
	if (e.target && e.target.classList.contains('update')) {
		const name = e.target.dataset.name;
		const qty = parseInt(e.target.value);
		updateCart(name, qty);
	};
};

// ---------------------------------------------
// Handle clicks on list
itemList.onclick = function(e) {
	// console.log("Beep Boop!");
	// console.log(e.target);
	if(e.target && e.target.classList.contains('remove')) {
		const name = e.target.dataset.name;
		removeItem(name);
	} else if (e.target && e.target.classList.contains('add-one')) {
		const name = e.target.dataset.name;
		addItem(name);
	} else if (e.target && e.target.classList.contains('remove-one')) {
		const name = e.target.dataset.name;
		removeItem(name, 1);
	};
};

// ---------------------------------------------
// Add Items
function addItem(name, price) {
	for (let i = 0; i < cart.length; i += 1) {
		if (cart[i].name === name) {
			cart[i].qty += 1;
			showItems();
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
	//displays quantity of items on page
	cartQty.innerHTML = `You have ${qty} items in your cart`;

	let itemStr = '';

	for (let i = 0; i < cart.length; i += 1) {
		//console.log(`- ${cart[i].name} $${cart[i].price} * ${cart[i].qty}`);

		// cart[i] looks like this >>> { name: 'apple', price: 0.99, qty: 3}
		const {name, price, qty} = cart[i];
		const total = qty * price;

		itemStr += `<li> 
		${name} $${price} * ${qty} = $${total.toFixed(2)} 
		<button class="remove" data-name="${name}"> 
		Remove 
		</button>
		<button class="add-one" data-name="${name}"> 
		+
		</button>
		<button class="remove-one" data-name="${name}"> 
		- 
		</button>
		<input class="update" type="number" data-name="${name}">
		</li>`;
	};
	// displays item list on page
	itemList.innerHTML = itemStr;

	// displays cart total on page
	cartTotal.innerHTML = `Your total in cart: $${getTotal()}`;
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
			showItems();
			return;
		};
	};
};

// ---------------------------------------------
function updateCart(name, qty) {
	for (let i = 0; i < cart.length; i += 1) {
		if (cart[i].name === name) {
			if (qty < 1) {
				removeItem(name);
			};
			cart[i].qty = qty;
			showItems();
			return;
		};
	};
};

// ---------------------------------------------
//example items
// addItem('apple', 0.99);
// addItem('orange', 1.29);
// addItem('opinion', 0.02);
// addItem('apple', 0.99);
// addItem('frisbee', 9.92);
// addItem('apple', 0.99);
// addItem('orange', 1.29);

// removeItem('frisbee')
// removeItem('apple', 1)

// showItems();

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------

// for loop to create each card element and display on page
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

//creates array for all buttons on page
const all_items_button = Array.from(document.querySelectorAll("button"));
console.log(all_items_button);

all_items_button.forEach(elt => elt.addEventListener('click', () => {
	addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
	showItems();
  	}));

