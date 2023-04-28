const words = ['Teacher.', 'Programmer.', 'Student.', 'Writer.', 'Editor.', 'Athlete.', 'Educator.', 'Linguist.', 'Mentor.', 'Professor.', 'WebDev.', 'Life Long Learner.']
function displayRandomWord() {
  const bannerText = document.getElementById("banner-text");
  const randomIndex = Math.floor(Math.random() * words.length);
  bannerText.innerHTML = words[randomIndex];
}

displayRandomWord();
setInterval(displayRandomWord, 3000);