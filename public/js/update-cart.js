const deleteBtnHandler = async (event)=> {
  if (event.target.hasAttribute('data-id')) {
    const id= event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/orders/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      document.location.replace('/cart');
    } else {
      alert('Failed to delete order');
    }  
  }
};

const updateCartFormHandler = async function(event) {
  event.preventDefault();
  const id= event.target.getAttribute('data-id');
  const book_id = document.querySelector('#book1_id').value;
  const book_price = document.querySelector('#book1_price').value;
  const user_id = document.querySelector('#qty_user_id').value;
  const quantity = document.querySelector('#quantity').value;

  console.log(book_price + "|" + user_id + "|" + quantity)
  if (event.target.hasAttribute('data-id')) {
    
    console.log(`/api/orders/${id}`);
    
    await fetch(`/api/orders/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        book_id,
        book_price,
        user_id,
        quantity,
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