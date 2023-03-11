const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); 

function writeCards(names,event) {
   const messages = [];
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        }
    return messages;
  }
  writeCards(["Ada", "Brendan", "Ali"], "birthday"); 

    function countDown(number) {
    while (number >= 0){
    console.log(number--);
    }
  }
  countDown(11); 
 
 