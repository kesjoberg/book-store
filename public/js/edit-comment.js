const deleteBtnHandler = async (event)=> {
  if (event.target.hasAttribute('data-id')) {
    const id= event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/comments/${id}`, {
      method: 'DELETE'
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }  
  }
};

const updateFormHandler= async (event) => {
event.preventDefault();

 const commentId = document.querySelectorAll('#comment-id').value;
 const body = document.querySelector('#comment-body').value.trim();
 const user_id = document.querySelector('#user-id').value;
 const book_id = document.querySelector('#book-id').value;

  // console.log("id:"+ id+ " description " +body + " | " + user_id + " | " +book_id);
  
   if (event.target.hasAttribute('data-id')) {
    const id= event.target.getAttribute('data-id');
    console.log(id);
    await fetch(`/api/comments/${id}`, {
      method: 'PUT',
      body: JSON.stringify({commentId, body, user_id, book_id}),
      headers: { 'Content-Type': 'application/json' },
    });
    
      document.location.replace('/profile');
  }

}
  
  document
  .querySelector('#update-button')
  .addEventListener('click', updateFormHandler);

document
  .querySelector('#delete-button')
  .addEventListener('click', deleteBtnHandler);