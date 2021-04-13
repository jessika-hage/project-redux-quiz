import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'This one is actually really delicate but what is it named?', options: ['Hippospongia', 'Cauliflower', 'Air head'], correctAnswerIndex: 1, image: 'blomkalssvamp.webp'},
  { id: 2, questionText: 'This chubby fellow is known to cause gastrointestinal symptoms of diarrhoea and violent vomiting so don’t eat it! But what is its name?', options: ['Satans Bolete', 'The Read Threat', 'Fly Agaric' ], correctAnswerIndex: 0, image: 'djavulssopp.jpeg'},
  { id: 3, questionText: 'This is a penny bun. The fruit body has a large browncapwhich on occasion can reach:', options: ['15cm in diameter and 1kg', '50 cm in diameter and 5kg', '35cm in diameter and 3kg'], correctAnswerIndex: 2, image: 'kulli-kittus-gtdyJQqCzsA-unsplash.jpg' },
  { id: 4, questionText: 'This is an orange milkcap also called false saffron milkcap. This mushroom stains a deep green color when handled. When fresh, the mushroom exudes an orange-red latex or "milk" that does not change color. But can you eat it?', options: ['Yes! It’s delicious!', 'No! Not if you want to live!', 'Well, it won’t kill you, but it tastes like sweaty feet.'], correctAnswerIndex: 0, image: 'blodriska2.jpg' },
  { id: 5, questionText: 'This one is a parasol mushroom and...', options: ['It’s very tasty and you can fry it as a steak!', 'It’s very poisonous, its’ poison effect the nerve system'], correctAnswerIndex: 0, image: 'stoltfjallskivling.jpeg' },
  { id: 6, questionText: 'And this one is a panther cap...', options: ['It’s very tasty and you can fry it as a steak!', 'It’s very poisonous, its’ poison effect the nerve system'], correctAnswerIndex: 1, image: 'panterflnckig-flugsvamp.jpeg' },
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false,
  progress: 16.66,
  disabled: false,
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)
      state.disabled = true
  

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
        state.progress += 16.66;
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})
