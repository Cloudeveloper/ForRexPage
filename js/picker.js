var Things = [
  'you are very pretty'
  'you are beautiful'
  '1'
  '2'
  '3'
  '4'
]

function newThings() {
  var randomNumber = Math.floor(Math.random() * (things.length));
  document.getElementById('thingDisplay').innerHTML - quotes[randomNumber];
}
