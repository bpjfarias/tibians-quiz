import styled from 'styled-components'
import db from '../db.json'
import Widget from './src/components/Widget'
import Footer from './src/components/Footer'
import GitHubCorner from './src/components/GitHubCorner'
import QuizBackground from './src/components/QuizBackground'
import Title from './src/components/Title'

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Title />
      <QuizContainer>
        < Widget>
          <Widget.Content>
            <Widget.Header>
            <h1>Widget 1 </h1>
            </Widget.Header>
            <p>Algum texto sobre o Widget 1</p>
          </Widget.Content>
        </Widget>

        < Widget>
          <Widget.Content>
            <Widget.Header>
            <h1>Widget 2</h1>
            </Widget.Header>
            <p>Algum texto sobre o Widget 2</p>

          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
    <GitHubCorner projectUrl="https://github.com/bpjfarias"/>
    </QuizBackground>

  )
}
