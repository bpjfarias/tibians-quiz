/* eslint-disable linebreak-style */
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import db from '../db.json';
import Footer from './src/components/Footer';
import GitHubCorner from './src/components/GitHubCorner';
import QuizBackground from './src/components/QuizBackground';
import Widget from './src/components/Widget';
import Input from './src/components/Input';
import Button from './src/components/Button'
import QuizContainer from './src/components/QuizContainer';

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
            <form onSubmit={(event) => {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Qual seu nome?"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <Button type="submit" disabled={!name}>
                Boa sorte
                {` ${name}`}
              </Button>
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
