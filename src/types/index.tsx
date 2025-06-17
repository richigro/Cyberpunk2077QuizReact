export interface IAnswer {
  name: string;
  isCorrect: boolean;
}

export interface IQuestion {
    question: string;
    answers: Array<IAnswer>;
  
}