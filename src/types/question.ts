export type Question = {
    id: number,
    question: string,
    answer: string,
    alternative1: string
    alternative2: string
    alternative3: string
}

export const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
    alternative1: "Lyon",
    alternative2: "Marseille",
    alternative3: "Nice"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
    alternative1: "Venus",
    alternative2: "Jupiter",
    alternative3: "Mercury"
  },
  {
    id: 3,
    question: "Who wrote the play 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    alternative1: "Charles Dickens",
    alternative2: "Jane Austen",
    alternative3: "Mark Twain"
  },
  {
    id: 4,
    question: "What is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    alternative1: "Atlantic Ocean",
    alternative2: "Indian Ocean",
    alternative3: "Arctic Ocean"
  },
  {
    id: 5,
    question: "What is the chemical symbol for Gold?",
    answer: "Au",
    alternative1: "Ag",
    alternative2: "Pb",
    alternative3: "Fe"
  }
]
