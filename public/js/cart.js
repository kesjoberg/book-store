const orderId = document.querySelector('#order-id').value;

  const deleteBtnHandler = async ()=> {
    const response = await fetch(`/api/orders/${orderId}`, {
      method: 'DELETE'
    });
      document.location.replace('/cart');
    
  };

const updateCartFormHandler = async function(event) {
  event.preventDefault();

  const book_id = document.querySelector('#book1_id').value;
  const book_price = document.querySelector('#book1_price').value;
  const user_id = document.querySelector('#qty_user_id').value;
  let quantity = document.querySelector('#quantity').value;
  let total =  parseInt(book_price) * parseInt(quantity)
  
  console.log(book_price + "|" + user_id + "|" + quantity)

  if (quantity) {
    await fetch(`/api/orders/${orderId}`, {
      method: 'PUT',
      body: JSON.stringify({
        book_id,
        book_price,
        user_id,
        quantity,
        total
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.querySelector('#quantity').value = '';
    document.location.replace('/cart');
  }
};

let cart = document.querySelectorAll('#cart-btn');
cart.forEach(btn => {
  btn.addEventListener('click', updateCartFormHandler)
})
 
let del = document.querySelectorAll('#delete-btn');
del.forEach(btn => {
  btn.addEventListener('click', deleteBtnHandler);
})