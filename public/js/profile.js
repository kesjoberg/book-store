const id = document.querySelector('#comment-id').value;


const updateCommentForm= async () => {
  document.location.replace(`/update-comment/${id}`);
}
  
const updateOrderForm= async () => {
  document.location.replace(`/cart`);
}

let comment = document.querySelectorAll('#update-delete-button');
comment.forEach(btn => {
  btn.addEventListener('click', updateCommentForm)
})
 
let cart = document.querySelectorAll('#order-update-delete-button');
cart.forEach(btn => {
  btn.addEventListener('click', updateOrderForm);
})
  
