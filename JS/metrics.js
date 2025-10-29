
const metre = document.querySelector('.LenT');
const liquid = document.querySelector('.Vol');
const mass = document.querySelector('.Mass');
butn = document.querySelector('.convertB');


function convertN (convert) {
  const num = document.querySelector('.input');
  let Num = num.value
   let value = Number(Num)
  if (convert === 'metre') {
    metre.innerHTML += (value/3.261).toFixed(3)
    num.innerHTML ='';
  }
  else if (convert === 'mass') {
    num.innerHTML = (value/3.204).toFixed(3)
  } else{
    num.innerHTML = (value/0.264).toFixed(3)
  }
}
console.log((20/3.204).toFixed(3))

butn.addEventListener('click', () => {convertN('metre');

})