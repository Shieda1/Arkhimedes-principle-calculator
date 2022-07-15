// https://calculator.swiftutors.com/archimedes-principle-calculator.html 

const fluidDensity =  document.getElementById('fluidDensity');
const objectDensity =  document.getElementById('objectDensity');
const volume = document.getElementById('volume');
const btn = document.getElementById('btn');
const result = document.getElementById('result');



btn.addEventListener('click', function() {
  result.textContent = `Force of buoyancy = ${computeBuoyancyForce().toFixed(2)}N`;
})


function computeBuoyancyForce() {
  const g = 9.80665;
  return Number(volume.value) * g * (Number(objectDensity.value) - Number(fluidDensity.value));
}