import Widget from "../Widget";
import Button from "../Button";

export default function QuestionWidget({ question, totalQuestions,  currentQuestion, onSubmit }) {
  const questionId = `questionId__${currentQuestion}`
  return (
    <Widget>
      <Widget.Header>
        <h3> Pergunta {currentQuestion+1} de {totalQuestions}</h3>
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

        <form
        onSubmit={ (event) => {
            event.preventDefault()
            onSubmit()
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}` 
            return (
              <Widget.Topic 
              as="label" 
              htmlFor={alternativeId}
            >
                <input
                // // style={{
                // //   display: "none",
                // // }}
                id={alternativeId}
                name={questionId}
                type="radio" 
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button 
          type="submit"
          >
              Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}
