import Head from 'next/head';
import React from 'react';
import db from '../../db.json';
import LoadingWidget from '../../src/components/LoadingWidget';
import QuestionWidget from '../../src/components/QuestionWidget';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import QuizLogo from '../../src/components/QuizLogo';
import ResultImageWidget from '../../src/components/ResultImageWidget';
import ResultWidget from '../../src/components/ResultWidget';

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
  const [LoadingControl, setLoadingControl] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000)
  }, [])

  function addResultIntoResults(result) {
    setResults([
      ...results,
      result
    ])
  }

  function checkResultsToChooseAnImage(results) {
    const rightQuestionsCounter = results.filter((x) => x == true).length

    return rightQuestionsCounter >= 6 ? 1 : 0

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
        {!LoadingControl && screenState == screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResultIntoResults={addResultIntoResults}
            setLoadingControl={setLoadingControl}
          />
        )}
        {!LoadingControl && screenState == screenStates.LOADING && <LoadingWidget />}
        {LoadingControl && <LoadingWidget />}
        {!LoadingControl && screenState == screenStates.RESULT &&
          <ResultWidget
            results={results}
          />}
        {!LoadingControl && screenState == screenStates.RESULT &&
          <ResultImageWidget
            index={checkResultsToChooseAnImage(results)}
          />}
      </QuizContainer>
    </QuizBackground>
  );
};