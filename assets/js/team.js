function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let holder = document.getElementById('teamHolder');
let team = [
  document.getElementById('amahdy'),
  document.getElementById('nitin'),
  document.getElementById('ksenja')
];

let selection = getRandomInt(3);
holder.insertAdjacentElement('beforeend', team[selection]);
team.splice(selection, 1);
selection = getRandomInt(2);
holder.insertAdjacentElement('beforeend', team[selection]);
team.splice(selection, 1);
holder.insertAdjacentElement('beforeend', team[0]);
