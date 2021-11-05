const commentFormHandler = async function(event) {
  event.preventDefault();

  const book_id = document.querySelector('#book_id').value;
  let body = document.querySelector('#comment').value;

  if (body) {
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        book_id,
        body
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.querySelector('#comment').value = '';
    // document.location.reload();
  }
};

const cartFormHandler = async function(event) {
  event.preventDefault();

  // const book_id = document.querySelector('#book1_id').value;
  const user_id = document.querySelector('#user_id').value;
  let quantity = document.querySelector('#quantity').value;

  if (quantity) {
    await fetch('/api/orders', {
      method: 'POST',
      quantity: JSON.stringify({
        // book_id,
        user_id,
        quantity,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    document.querySelector('#quantity').value = '';
    // document.location.reload();
  }
};


document
  .querySelector('#new-comment-form')
  .addEventListener('submit', commentFormHandler);

document
  .querySelector('#new-cart-form')
  .addEventListener('submit', cartFormHandler )