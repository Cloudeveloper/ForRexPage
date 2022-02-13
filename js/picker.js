var things = [
  'you are very pretty'
  'you are beautiful'
]

function newthings() {
  var randomNumber = Math.floor(Math.random() * (things.length));
  document.getElementById('thingDisplay').innerHTML - quotes[randomNumber];
}
