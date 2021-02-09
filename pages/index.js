import { motion } from 'framer-motion';
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
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';

export default function Home() {
  
  const router = useRouter();

  const [name, setName] = React.useState('');

  const [response, setResponse] = React.useState({})

  async function requestToGitTopics() {

  const URL_TO_GET = 'https://api.github.com/search/repositories?q=topic:aluraquiz+topic:imersao-react+topic:alura'
  
  const myHeaders = new Headers()
  myHeaders.append('Accept','application/vnd.github.v3+json')
  
  const myInit = {
    method: 'GET',
    headers: myHeaders
  };

  const myRequest = new Request(URL_TO_GET, myInit)

  const response =  await fetch(myRequest)

  setResponse(response)
}

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Tibians Quiz - Home</title>
      </Head>
      <QuizContainer>
      <QuizLogo 
      isTransitions= {true}
      />
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
        <Footer
          as={motion.footer}
          variants={{
            show: { y: 0 },
            hidden: { y: 1500 },
          }}
          initial="hidden"
          animate="show"
          transition={{
            type: 'spring',
            velocity: 5
          }}
        />
      </QuizContainer>
      <GitHubCorner 
      projectUrl="https://github.com/bpjfarias"
       />
    </QuizBackground>
  );
}
