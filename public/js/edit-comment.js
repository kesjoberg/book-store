const commentId = document.querySelector('#comment-id').value;

  const deleteBtnHandler = async ()=> {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    });
      document.location.replace('/profile');
    
  };

const updateFormHandler= async (event) => {
 event.preventDefault();

 const id = document.querySelector('#comment-id').value;
 const body = document.querySelector('#comment-body').value.trim();
 const user_id = document.querySelector('#user-id').value;
 const book_id = document.querySelector('#book-id').value;

  // console.log("id:"+ id+ " description " +body + " | " + user_id + " | " +book_id);
  
 await fetch(`/api/comments/${commentId}`, {
     method: 'PUT',
     body: JSON.stringify({id, body, user_id, book_id} ),
     headers: { 'Content-Type': 'application/json' },
   });
  
   document.location.replace('/profile');

}
  
  document
  .querySelector('#update-button')
  .addEventListener('click', updateFormHandler);

document
  .querySelector('#delete-button')
  .addEventListener('click', deleteBtnHandler);