// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



const hearts = document.querySelectorAll("span.like-glyph")
console.log(hearts)
hearts.forEach(heart =>heart.addEventListener('click', () => {
  console.log(heart.innerHTML)
  mimicServerCall()
  .then(() => {
    if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART
    }
    else if (heart.innerHTML === FULL_HEART) {
      heart.innerHTML = EMPTY_HEART
    }
  })
  .catch(() => {
      
    setTimeout(() => {
      const erMsg =document.getElementById("modal")
      erMsg.hidden
    } ,300);
    const erMsg =document.getElementById("modal")
    erMsg.className = "show"
  })
}))






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
