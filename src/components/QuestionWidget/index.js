import Widget from "../Widget";
import Button from "../Button";
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow/index.js'
import LoadingWidget from '../../components/LoadingWidget';


export default function   QuestionWidget({ setLoadingControl, question, questionIndex, totalQuestions, onSubmit, addResultIntoResults }) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined)
  const questionId = `questionId__${questionIndex}`
  const isCorrect = selectedAlternative == question.answer;
  const [isQuestionSubmitted, setIsQuestionSubmitted] = React.useState(false)
  const hasAlternativeSelected = selectedAlternative !== undefined
  const TIMEOUT =  1500
 
    return (
      <Widget>
        <Widget.Header>
          <BackLinkArrow href="/" />
          <h3> {`Pergunta ${questionIndex+1} de ${totalQuestions}`}</h3>
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
                setLoadingControl(true)
              }, TIMEOUT)

              setTimeout(() =>{
                setLoadingControl(false)
              }, TIMEOUT+1000)
                             
            }}
          >
            {question.alternatives.map((alternative, alternativeIndex) => {
              
              const alternativeId = `alternative__${alternativeIndex}` 
              const alternativeStatus = isCorrect ? 'SUCCESS': 'ERROR'
              const isRadioSelected = selectedAlternative == alternativeIndex
              return (
                <Widget.Topic key={`${questionIndex}key__${alternativeIndex}`}
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
          </AlternativesForm>
        </Widget.Content>
      </Widget>
    );
  } 

