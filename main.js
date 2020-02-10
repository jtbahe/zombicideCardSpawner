let displayCard = document.getElementById("cardDisplay");
let threatLevel = 'blue';
let x = document.getElementById("threatLevel");
let message = '';
let deck1 = [
  {
    number: 1,
    blue: 'Phew! No Spawn',
    yellow: '2 Runners',
    orange: '2 Runners',
    red: '5 Walkers',
  },
  {
    number: 2,
    blue: '1 Walker',
    yellow: '1 Walker',
    orange: '6 Walkers',
    red: '7 Walkers',
  },
  {
    number: 3,
    blue: '1 Walker',
    yellow: '1 Runner',
    orange: '1 Fatty',
    red: '4 Runners',
  },
  {
    number: 4,
    blue: '2 Walkers',
    yellow: '3 Walkers',
    orange: "4 Walkers",
    red: "2 Runners",
  }, {
    number: 5,
    blue: 'Phew! No Spawns',
    yellow: '4 Walkers',
    orange: '2 Fattys',
    red: '5 Walkers'
  }, {
    number: 6,
    blue: '1 Walker',
    yellow: '1 Walker',
    orange: '3 Runners',
    red: '7 Walkers'
  }, {
    number: 7,
    blue: '1 Walker',
    yellow: '2 Walkers',
    orange: '2 Walkers',
    red: '4 Runners'
  }, {
    number: 8,
    blue: '2 Walkers',
    yellow: '3 Walkers',
    orange: '4 Walkers',
    red: '2 Fattys'
  }, {
    number: 9,
    blue: 'Phew! No Spawns',
    yellow: '4 Walkers',
    orange: '2 Runners',
    red: '5 Walkers'
  }, {
    number: 10,
    blue: '1 Walker',
    yellow: '1 Walker',
    orange: '3 Runners',
    red: '7 Walkers'
  },
];

// creates a copy of the original deck
let deck2 = deck1.slice(0);

// function to make threat level buttons visible/ hidden
function setVisibility(location, setting) {
  document.getElementById(location).style.visibility = setting;
}

// resets the board back to threat level blue
function reset() {
  setVisibility("blueLevel", 'visible');
  setVisibility('yellowLevel', 'visible');
  setVisibility('orangeLevel', 'visible');
  threatLevel = 'blue';
  x.style.backgroundColor = 'blue';
  displayCard.innerHTML = "";
}

function changeColor(color) {
  x.style.backgroundColor = color;
  if (color === 'yellow') {
    setVisibility('blueLevel', 'hidden');
    threatLevel = 'yellow';
  } else if (color === 'orange') {
    setVisibility('blueLevel', 'hidden');
    setVisibility('yellowLevel', 'hidden');
    threatLevel = 'orange';
  } else if (color === 'red') {
    setVisibility('blueLevel', 'hidden');
    setVisibility('yellowLevel', 'hidden');
    setVisibility('orangeLevel', 'hidden');
    threatLevel = 'red';
  }
}

// draws card from deck and displays info on bottom div
function draw() {
  // gets random number from 0 to current deck 2 length
  let num = Math.floor(Math.random() * deck2.length)
  // selects that index position from deck2
  let x = deck2[num];
  // checks the current threat level and builds message to show spawn amount from card for the threat level
    if (threatLevel === 'blue') {
      message = '';
      message += '<p> Card ID: ' + x.number + '</p>';
      message += '<p> Enemy Spawn: ' + x.blue + '</p>';
      displayCard.innerHTML = message;
    } else if(threatLevel === 'yellow') {
      message = '';
      message += '<p> Card ID: ' + x.number + '</p>';
      message += '<p> Enemy Spawn: ' + x.yellow + '</p>';
      displayCard.innerHTML = message;
    } else if(threatLevel === 'orange') {
      message = '';
      message += '<p> Card ID: ' + x.number + '</p>';
      message += '<p> Enemy Spawn: ' + x.orange + '</p>';
      displayCard.innerHTML = message;
    } else {
      message = '';
      message += '<p> Card ID: ' + x.number + '</p>';
      message += '<p> Enemy Spawn: ' + x.red + '</p>';
      displayCard.innerHTML = message;
    }
  // removes the drawn card from the deck
  deck2.splice(num, 1);
  // checks if deck2 is empty, if it is copies deck1 again
  if (!deck2.length) {
    deck2 = deck1.slice(0);
  }

  }