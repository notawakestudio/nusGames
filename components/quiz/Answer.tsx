import { renderMdToHtml } from '../common/Util'
import { QuizMode } from './types'
type AnswerProps = {
  type: string
  answerText: string
  userAnswer: string[]
  correct_answers: string[]
  quizMode: QuizMode
  updateAnswer: (selectedOption: string) => void
}
const Answer = ({
  type,
  answerText,
  userAnswer,
  correct_answers,
  quizMode,
  updateAnswer,
}: AnswerProps): JSX.Element => {
  return (
    <div
      className="text-base bg-indigo-300 mx-1 my-4 px-1 rounded-md w-full flex shadow-sm dark:bg-indigo-500 dark:text-gray-200"
      key={answerText}>
      <button
        className={`break-normal flex items-center p-2 dark:bg-gray-700 flex-1 w-full ${
          userAnswer.includes(answerText)
            ? 'bg-blue-200 dark:bg-blue-900'
            : 'bg-gray-50 dark:bg-gray-800'
        } ${
          quizMode === QuizMode.REVIEWING && correct_answers.includes(answerText)
            ? 'border-dotted border-green-500 border-4 bg-green-100'
            : ''
        }`}
        onClick={(e) => {
          updateAnswer(e.currentTarget.value)
        }}
        value={answerText}>
        <label className="flex items-center mr-2">
          <input
            type={`${type === 'MRQ' ? 'checkbox' : 'radio'}`}
            readOnly
            className="form-radio h-5 w-5 text-gray-600 dark:text-gray-200"
            checked={userAnswer.includes(answerText) ? true : false}
          />
        </label>
        <p
          className="flex text-left text-gray-600 dark:text-gray-200 max-w-full overflow-auto"
          dangerouslySetInnerHTML={{ __html: renderMdToHtml(answerText) }}></p>
      </button>
    </div>
  )
}
export default Answer
