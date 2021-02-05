import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import db from '../db.json';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Link from '../src/components/Link';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Widget from '../src/components/Widget';
import {motion} from 'framer-motion'

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Tibians Quiz</title>
      </Head>
      <QuizContainer>
        <Widget
          as={motion.section}
          variants={{
            show: { x: 0 },
            hidden: { x: 1500 },
          }}
          initial="hidden"
          animate="show"
          transition={{
            type: 'spring',
            velocity: 5
          }}
        >

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
                name='userName'
                placeholder="Qual seu nome?"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length <= 3 }>
                Boa sorte
                {` ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget
          as={motion.section}
          variants={{
            show: { x: 0 },
            hidden: { x: -2000 },
          }}
          initial="hidden"
          animate="show"
          transition={{
            type: 'spring',
            velocity: 5
          }}
        >
          <Widget.Header>
            <h1>Quizes da galera</h1>
          </Widget.Header>

          <Widget.Content>
            <ul>
              {db.external.map((externalLink) => {
                const [projectName, userName] =  externalLink
                .replace(/\//g, '')
                .replace('https:','')
                .replace('.vercel.app','')
                .split('.')
                const listKey =`key__${projectName}`
                return (
                  <li
                  key={listKey}
                  >
                    <Widget.Topic 
                    as={Link}
                    href={`/quiz/${projectName}.${userName}`}
                    >
                      {`${userName}/${projectName}`}
                      </Widget.Topic>
                  </li>
                )
              })}
            </ul>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner 
      projectUrl="https://github.com/bpjfarias"
       />
    </QuizBackground>
  );
}
