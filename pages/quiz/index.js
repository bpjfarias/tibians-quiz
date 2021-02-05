import Head from 'next/head';
import React from 'react';
import db from '../../db.json';
import LoadingWidget from '../../src/components/LoadingWidget';
import QuestionWidget from '../../src/components/QuestionWidget';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import ResultWidget from '../../src/components/ResultWidget';
import QuizLogo from '../../src/components/QuizLogo';

export default function QuizPage() {

  const screenStates = {
    LOADING: 'Loading',
    RESULT: 'Result',
    QUIZ: 'Quiz'
  }

  const [screenState, setScreenState] = React.useState(screenStates.LOADING)
  const [results, setResults] = React.useState([])
  const totalQuestions = db.questions.length
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex]

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1000)
  }, [])

  function addResultIntoResults(result) {
    setResults([
      ...results,
      result
    ])
  }

  function handleSubmitQuiz() {
    const nextQuestion = currentQuestion + 1
    nextQuestion < totalQuestions ? setCurrentQuestion(nextQuestion) : setScreenState(screenStates.RESULT)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Tibians Quiz - {screenState} </title>
      </Head>
      <QuizContainer>
      <QuizLogo />
        {screenState == screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResultIntoResults={addResultIntoResults}
          />
        )}
        {screenState == screenStates.LOADING && <LoadingWidget />}
        {screenState == screenStates.RESULT &&
          <ResultWidget
            results={results}
          />}
      </QuizContainer>
    </QuizBackground>
  );
};