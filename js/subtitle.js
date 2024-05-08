function getRandomGreeting() {
  var greetings = [
    
    "Toss the Turtle is pretty fun - Ricky",
    "Mission failed, we will get them next time, Ricky",
    "Ricky im better - Jonathan",
    "I spent too much time making these, Jonathan",
  ];
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

document.getElementById("subtitle").innerText = getRandomGreeting();
