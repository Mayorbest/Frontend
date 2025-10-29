let inputE = document.querySelector('input')
function getOn() { 
  const useN = inputE.value

    document.body.innerHTML = `<h3> Welcome ${useN}. Are you ready to start you quiz jorney</h3>
    <p>Click the button below to attempt a quiz</p>
    <button onclick=" ">Attempt Quiz</button>
    <p>Click the link below to try out our game</p>
    <a href="RPS Get.html">Rock Papper Scissor</a>`
}
function chooseQ(branch) {if (branch === 'Driving test') { document.querySelector('.js-driving-test').innerHTML = `
  `}
  else if (branch === 'Apitude test') {
    document.querySelector('.js-apitude-test').innerHTML = ``
  }
  else if (branch === 'Apitude test') {
    document.querySelector('.js-generalknowledge-test').innerHTML = ``
  }
  else if (branch === 'Apitude test') {
    document.querySelector('.js-maths-test').innerHTML = ``
  }

}