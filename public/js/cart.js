  
const updateOrderForm= async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
  document.location.replace(`/update-cart/${id}`);
}}

 
let cart = document.querySelectorAll('#cart-btn');
cart.forEach(btn => {
  btn.addEventListener('click', updateOrderForm);
})