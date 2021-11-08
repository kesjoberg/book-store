const id = document.querySelector('#comment-id').value;


const updateCommentForm= async () => {
  document.location.replace(`/update-comment/${id}`);
}
  
const updateOrderForm= async () => {
  document.location.replace(`/cart`);
}
  
  document
  .getElementById('update-delete-button')
  .addEventListener('click', updateCommentForm);

  document
  .getElementById('order-update-delete-button')
  .addEventListener('click', updateOrderForm);
