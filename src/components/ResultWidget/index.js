import PropTypes from 'prop-types';
import React from 'react';
import Widget from "../Widget";

export default function ResultWidget({results}){

    const rightQuestionsCounter = results.filter((x) => x == true).length

    return (
        <Widget>
            <Widget.Header>
                Seu resultado!
            </Widget.Header>
            <Widget.Content>
                <p>
                    {`Voce acertou ${rightQuestionsCounter} perguntas`}
                </p>
            </Widget.Content>             
        </Widget>
    )
}

ResultWidget.prototype ={
    results: PropTypes.array.isRequired,
}
