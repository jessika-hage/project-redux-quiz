import { createSlice } from "@reduxjs/toolkit";

const questions = [
  {
    id: 1,
    questionText: "This one is actually really delicate but what is it named?",
    options: ["Hippospongia", "Cauliflower", "Air head"],
    correctAnswerIndex: 1,
    image: "blomkalssvamp.webp",
  },
  {
    id: 2,
    questionText:
      "This chubby fellow is known to cause gastrointestinal symptoms of diarrhoea and violent vomiting so don’t eat it! But what is its name?",
    options: ["Satans Bolete", "The Red Threat", "Fly Agaric"],
    correctAnswerIndex: 0,
    image: "djavulssopp.jpeg",
  },
  {
    id: 3,
    questionText:
      "This is a penny bun. The fruit body has a large browncapwhich on occasion can reach:",
    options: [
      "15cm in diameter and 1kg",
      "50 cm in diameter and 5kg",
      "35cm in diameter and 3kg",
    ],
    correctAnswerIndex: 2,
    image: "karljohan.jpg",
  },
  {
    id: 4,
    questionText:
      'This is an orange milkcap also called false saffron milkcap. This mushroom stains a deep green color when handled. When fresh, the mushroom exudes an orange-red latex or "milk" that does not change color. But can you eat it?',
    options: [
      "Yes! It’s delicious!",
      "No! Not if you want to live!",
      "Well, it won’t kill you, but it tastes like sweaty feet.",
    ],
    correctAnswerIndex: 0,
    image: "blodriska.jpg",
  },
  {
    id: 5,
    questionText: "This one is a parasol mushroom and...",
    options: [
      "It’s very tasty and you can fry it as a steak!",
      "It’s very poisonous, its’ poison effect the nerve system",
    ],
    correctAnswerIndex: 0,
    image: "stoltfjallskivling.jpg",
  },
  {
    id: 6,
    questionText: "And this one is a panther cap...",
    options: [
      "It’s very tasty and you can fry it as a steak!",
      "It’s very poisonous, its’ poison effect the nerve system",
    ],
    correctAnswerIndex: 1,
    image: "pantersvamp.jpeg",
  },
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  progress: 0,/* Added by us for the Progress bar*/
  disabled: false,/* Added by us for the buttons*/
};

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {

    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      state.disabled = true;

      if (!question) {
        throw new Error(
          "Could not find question! Check to make sure you are passing the question id correctly."
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex,
        correctAnswer: question.options[question.correctAnswerIndex],/* Added by us for Summary*/
        questionImage: question.image,/* Added by us for Summary*/
      });
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
        state.progress += 20;
      }
    },

    restart: () => {
      return initialState;
    },
  },
});
