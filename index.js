const friends = ["Nicole", "Allan", "Miles"];
const occasion =["Baby Shower"]
const messages=[];

function writeCards(friends, occasion){
    for(let i = 0; i < friends.length; i++) {
        const card = (`Thank you, ${friends[i]}, for the wonderful ${occasion} gift!`);
        messages.push(card);
        
    }
    return messages;
}


function countDown(a){
    while (a >= 0) {
        console.log(a);
        a--
    }
}