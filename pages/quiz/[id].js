import React from 'react'
import { ThemeProvider } from 'styled-components'
import QuizScreen from '../../src/screens/Quiz/index.js'


export default function QuizzesFromPeople({externalDb}) {

    return (
        <ThemeProvider
            theme={externalDb.theme}
        >
            <QuizScreen
                externalQuestions={externalDb.questions}
                externalBackGround={externalDb.bg}
            />
        </ThemeProvider>
    )
}

export async function getServerSideProps(context) {
    const [projectName, userName] = context.query.id.split('__')
    const externalDb = await fetch(`https://${projectName}.${userName}.vercel.app/api/db`)
        .then((response) => {
            if (response.ok)
                return response.json();

            throw new Error('Something wrong trying to request...')
        });

    return {
        props: {
            externalDb,
        },
    }
}