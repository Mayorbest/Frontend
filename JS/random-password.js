const char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X' ,'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '(', ')', '.', '/', ',', ';', '[', ']', '|', '`', '~', '-', '_', '+', '=', '{', ' ]', '?', ':', '"']

console.log(char.length);
const btn = document.querySelector('.btn');

function genrateP () {
  let password = [];
  const disP = document.querySelector('.pass1');
  const diPass = document.querySelector('.pass2');
    
   while (password.length < 15 ) {
    
    password.push(char[Math.floor(Math.random()*88)])
    
   }
   let pass = '';
   let pbox = '';
  
   password.forEach((El) => {
    pass = El;
      `<span>${El}</span>`
      pbox += pass
      disP.innerHTML = pbox
      diPass.innerHTML = pbox
   })

   console.log(pbox)


   console.log(password)
}


btn.addEventListener('click', genrateP)



