'use strict' 
function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }
  let teams = ["lol", "kek", "jojo", "pisar", "jooms", "koloa"]
  function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
teams = shuffle(teams);

  let teams1 = [
      [1,2],
      [3,4],
      [5,6]
  ];
  let a = [teams.pop(),teams.pop()];
  let b = [teams.pop(),teams.pop()];
  let c = [teams.pop(),teams.pop()];


  let arr = [];
  arr.push(a);
  arr.push(b);
  arr.push(c);
console.log(arr);
