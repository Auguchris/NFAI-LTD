document.getElementById("orderForm").addEventListener("submit", function(e){
e.preventDefault();

let order = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
product: document.getElementById("product").value
};

let orders = JSON.parse(localStorage.getItem("orders")) || [];
orders.push(order);
localStorage.setItem("orders", JSON.stringify(orders));

alert("Order Submitted Successfully!");
this.reset();
});