let correctAnswers = 0;
let currentQuestionNumber = 0;
// questions and answers hard coded
export const QUESTIONS = [
  {
    question: "Who is the developer making Cybepunk 2077?",
    answers: [
      { name: "Bethesda", isCorrect: false },
      { name: "CD Projekt", isCorrect: true },
      { name: "Electronic Arts", isCorrect: false },
      { name: "Ubisoft", isCorrect: false },
    ],
  },
  {
    question: "Who was the original creator of Cyberpunk?",
    answers: [
      { name: "Marcin Iwiński", isCorrect: false },
      { name: "Adam Kicinski", isCorrect: false },
      { name: "Mike Pondsmiths", isCorrect: true },
      { name: "Adam Badowsk", isCorrect: false },
    ],
  },
  {
    question: "What kind of game of Cybepunk, before it was a videogame?",
    answers: [
      { name: "A pen and paper role playing game", isCorrect: true },
      { name: "A trading card game", isCorrect: false },
      { name: "A game inside a magazine", isCorrect: false },
      { name: "A board game", isCorrect: false },
    ],
  },
  {
    question: "In what year was the original Cybepunk game released?",
    answers: [
      { name: "1990", isCorrect: false },
      { name: "1988", isCorrect: true },
      { name: "2077", isCorrect: false },
      { name: "2000", isCorrect: false },
    ],
  },
  {
    question: "What kind of videogame is Cyberpunk 2077?",
    answers: [
      { name: "An adventure game", isCorrect: false },
      { name: "A first person shooter", isCorrect: false },
      { name: "A role-playing game", isCorrect: true },
      { name: "A point and click game", isCorrect: false },
    ],
  },
  {
    question: "In what city does Cyberpunk 2077 takes place?",
    answers: [
      { name: "New York City", isCorrect: false },
      { name: "Night City", isCorrect: true },
      { name: "Raccoon City", isCorrect: false },
      { name: "Megaton", isCorrect: false },
    ],
  },
  {
    question: "What is the name of Cybepunk's 2077 main character?",
    answers: [
      { name: "V", isCorrect: true },
      { name: "Ciri", isCorrect: false },
      { name: "Elliot", isCorrect: false },
      { name: "Richard", isCorrect: false },
    ],
  },
  {
    question:
      "Cyberpunk was inpired by the following movies and novles, except: ",
    answers: [
      { name: "Neuromancer", isCorrect: false },
      { name: "Blade Runner", isCorrect: false },
      { name: "Do Androids Dream of Electric Sheep", isCorrect: false },
      { name: "The Terminator", isCorrect: true },
    ],
  },
];
// stored question number
// const numberOfQuestions = STORE.length;
// need to get around 60% to pass
// const passingGrade = Math.floor((60 * numberOfQuestions) / 100);
