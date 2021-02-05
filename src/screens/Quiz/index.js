import React from 'react';
import LoadingWidget from '../../components/LoadingWidget';
import QuestionWidget from '../../components/QuestionWidget';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import ResultWidget from '../../components/ResultWidget';

export default function QuizPage( {externalQuestions, externalBackGround}) {

  const screenStates = {
    LOADING:'LOADING',
    RESULT:'RESULT',
    QUIZ: 'QUIZ'
  }

  const [screenState, setScreenState] = React.useState(screenStates.QUIZ)
  const [results, setResults] = React.useState([])
  const totalQuestions = externalQuestions.length  
  const [currentQuestion, setCurrentQuestion] = React.useState(0)
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex]

  React.useEffect( () => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1000)
  },[])

  function addResultIntoResults(result){
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
    <QuizBackground backgroundImage={externalBackGround}>
        <QuizContainer>

          {screenState == screenStates.QUIZ && (
            <QuestionWidget
            question={question} 
            questionIndex = {questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResultIntoResults={addResultIntoResults}
            />
          )}

        {screenState == screenStates.LOADING &&  <LoadingWidget />}

        {screenState == screenStates.RESULT &&
          <ResultWidget
          results={results}
          />}
           
      </QuizContainer>
    </QuizBackground>
  );
};