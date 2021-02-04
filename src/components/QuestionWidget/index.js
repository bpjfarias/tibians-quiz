import Widget from "../Widget";
import Button from "../Button";
import AlternativesForm from '../AlternativesForm';


export default function QuestionWidget({ question, questionIndex, totalQuestions, onSubmit, addResultIntoResults }) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
  const questionId = `questionId__${questionIndex}`
  const isCorrect = selectedAlternative == question.answer;
  const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false)
  const hasAlternativeSelected = selectedAlternative !== undefined
  const TIMEOUT =  2000
  return (
    <Widget>
      <Widget.Header>
        <h3> Pergunta {questionIndex+1} de {totalQuestions}</h3>
      </Widget.Header>

      <img
        alt="Descrição"
        src={question.image}
        style={{
          width: "100%",
          height: "159px",
          objectFit: "cover",
        }}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={(event) => {
            event.preventDefault()
            setIsQuestionSubmitted(true)
            setTimeout(() => {
              setIsQuestionSubmitted(false)
              addResultIntoResults(isCorrect)
              onSubmit()
              setSelectedAlternative(undefined)
            }, TIMEOUT)
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}` 
            const alternativeStatus = isCorrect ? 'SUCCESS': 'ERROR'
            const isRadioSelected = selectedAlternative == alternativeIndex
            return (
              <Widget.Topic key={`key__${alternativeIndex}`}
              as="label" 
              htmlFor={alternativeId}
              data-selected={isRadioSelected}
              data-status={isQuestionSubmitted && alternativeStatus}
            >
                <input
                  style={{
                    display: "none",
                  }}
                id={alternativeId}
                name={questionId}
                type="radio"                
                onChange={() => { setSelectedAlternative(alternativeIndex) }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button 
          type="submit"
          disabled={!hasAlternativeSelected}
          >
              Confirmar
          </Button>
          {isQuestionSubmitted && isCorrect && <p>Voce acertou</p>}
          {isQuestionSubmitted && !isCorrect && <p>Voce Errou</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}
