/* eslint-disable linebreak-style */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import db from '../db.json';
import Footer from './src/components/Footer';
import GitHubCorner from './src/components/GitHubCorner';
import QuizBackground from './src/components/QuizBackground';
import Widget from './src/components/Widget';

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Tibians Quiz</title>
      </Head>
      <QuizContainer>
        <Widget>

          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>

          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                placeholder="Qual seu nome?"
                onChange={function (event) {
                  setName(event.target.value);
                }}
              />
              <button type="submit" disabled={!name}>
                Boa sorte, {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>

          <Widget.Content>
            <p>Em breve aqui aparecerão os quizes de quem também fez a semana da Alura!</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/bpjfarias" />
    </QuizBackground>
  );
}
