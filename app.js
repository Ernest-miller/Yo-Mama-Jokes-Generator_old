/*
let fat = '';
let ugly = '';
let old = '';
let jokes = '';


fat = ['', '', '', '', '']

ugly = ['', '', '', '', '']

old = ['', '', '', '', '']

console.log();
if (jokes == fat){
     //do this
}
else if (jokes == ugly){
     //do this
}
else if (jokes == old){
     //do this
}
console.log();


// I copy/pasted these jokes from here [ http://www.laughfactory.com/jokes/yo-momma-jokes/34 ]
*/


let fat = '';
let ugly = '';
let old = '';
let jokes = '';

    fat = ['Yo momma is so fat that when she saw a yellow school bus go by full of white kids she ran after it yelling, "TWINKIE!" ', 'Yo momma is so fat, that when she went to the zoo, the hippos got jealous. ', 'Yo mamma is so fat she walked past the TV and I missed 3 episodes.', 'Yo momma so fat when she steps out in a yellow raincoat, the people yell, "TAXI!"', 'Yo mama so fat I tried driving around her and I ran out of gas.']

    ugly = ['Yo momma so ugly that when she looked in a mirror it broke.', 'Yo momma so ugly when she went into a haunted house she came out with a job application.', 'Yo momma is so ugly even Hello Kitty said, "Goodbye" to her', 'Yo momma is so ugly she turned Medusa into stone.', 'Yo momma is so ugly, the government moved Halloween to her birthday!']

    old = ['Yo momma so old, when we watched Jurrasic Park she started having flashbacks.', 'Yo momma is so old, her first car was a Model T-Rex.', 'Yo momma is so old that that when she was in school there was no history class.', 'Yo momma is so old that her memory is in black and white.', 'Yo momma is so old she knew Burger King when he was a prince.']


console.log('Yo Mamma jokes');
jokes = 'ugly';// Jokes

//IF statements
if (jokes == 'fat'){ //do this
    var idx = Math.floor(Math.random() * Math.floor(5)); 
    alert(fat[idx]);
    var idx = Math.floor(Math.random() * Math.floor(fat.length));
}
else if (jokes == 'ugly'){ //do this
    var idx = Math.floor(Math.random() * Math.floor(5)); 
    alert(ugly[idx]);
    var idx = Math.floor(Math.random() * Math.floor(ugly.length));
}
else if (jokes == 'old'){ //do this
    var idx = Math.floor(Math.random() * Math.floor(5)); 
    alert(old[idx]);
    var idx = Math.floor(Math.random() * Math.floor(old.length));
};
document.getElementById('joke_txt').style.display = jokes;