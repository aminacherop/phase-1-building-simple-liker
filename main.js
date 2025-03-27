// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.querySelectorAll(`.like-glyph`).forEach(heart =>{
  heart.addEventListener(`click`,function(){
    mimicServerCall()
    .then(() =>{
      this.classList.remove('empty-heart');
        this.classList.add('full-heart');
        this.classList.add(`activated-heart`)

    })
    .catch((error) =>{
      const errorModal = document.querySelector('#error-modal');
        errorModal.classList.remove('.hidden');

        const errorMessage = document.querySelector('#error-message');
        errorMessage.textContent = error.message;
        
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000)
    })
  })
  function handleFullHeartClick(heart){
    heart.classList.remove(`full-heart`);
    heart.classList.add(`empty-heart`);

    heart.classList.remove(`activated-heart`)
  }
  

})




// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
