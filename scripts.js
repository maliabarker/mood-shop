import data from './data.js'

const itemsContainer = document.querySelector('#items');

const cart = [];

const obj = {name:"shoe", price: 9.99, qty: 3}
// console.log(obj);
// console.log(obj.name);
// console.log(obj.price);
// console.log(obj.qty);
// console.log(obj.price * obj.qty);

function addItem(name, price, qty) {
	const item = {name:name, price:price, qty:qty};
	cart.push(item);
};

function showItems() {
	console.log(`You have ${cart.length} items in your cart`);
};

addItem('apple', 0.99, 1);
addItem('orange', 1.29, 1);

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