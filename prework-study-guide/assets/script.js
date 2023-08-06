var topics = ["HTML", "CSS", "Git", "Javascript"];

function selectTopic() {
  var randomTopic = topics[Math.floor(Math.random() * topics.length)];
  if (randomTopic === "HTML") {
    console.log("Let's study HTML!");
  } else if (randomTopic === "CSS") {
    console.log("Let's study CSS!");
  } else if (randomTopic === "Git") {
    console.log("Let's study Git!");
  } else if ("Javascript") {
    console.log("Let's study Javascript!");
  } else {
    console.log("Please try again!");
  }
}
function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we learn first?");
selectTopic();
